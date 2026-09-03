<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/phpmailer/src/Exception.php';
require __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/src/SMTP.php';

header('Content-Type: application/json; charset=UTF-8');

$smtpConfig = require __DIR__ . '/smtp-config.php';

if (trim($smtpConfig['password'] ?? '') === '') {
    http_response_code(500);
    echo json_encode(['response' => 'error', 'errorMessage' => 'Gmail SMTP is not configured. Add your Gmail App Password in smtp-config.php.']);
    exit;
}

function sendEmail(array $smtpConfig, string $recipient, string $subject, string $body, string $replyTo = ''): bool
{
    $mailer = new PHPMailer(true);

    try {
        $mailer->isSMTP();
        $mailer->Host = $smtpConfig['host'];
        $mailer->SMTPAuth = true;
        $mailer->Username = $smtpConfig['username'];
        $mailer->Password = preg_replace('/\s+/', '', $smtpConfig['password']);
        $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mailer->Port = $smtpConfig['port'];
        $mailer->CharSet = 'UTF-8';
        $mailer->setFrom($smtpConfig['from_email'], $smtpConfig['from_name']);
        $mailer->addAddress($recipient);
        if ($replyTo !== '') {
            $mailer->addReplyTo($replyTo);
        }
        $mailer->Subject = $subject;
        $mailer->Body = $body;
        $mailer->send();
        return true;
    } catch (Exception $exception) {
        error_log('Contact email error: ' . $exception->getMessage());
        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['response' => 'error', 'errorMessage' => 'Invalid request method.']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = trim($_POST['phone'] ?? '');
$requirement = trim($_POST['requirement'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $phone === '' || $requirement === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['response' => 'error', 'errorMessage' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['response' => 'error', 'errorMessage' => 'Please enter a valid email address.']);
    exit;
}

$inbox = 'amitagarwalrkt@gmail.com';
$safeName = str_replace(["\r", "\n"], '', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safeRequirement = str_replace(["\r", "\n"], '', $requirement);
$subject = 'New Contact Form Query: ' . $safeRequirement;
$body = "Name: {$safeName}\n";
$body .= "Email: {$safeEmail}\n";
$body .= "Phone: {$phone}\n";
$body .= "Requirement: {$requirement}\n\n";
$body .= "Message:\n{$message}\n";
$querySent = sendEmail($smtpConfig, $inbox, $subject, $body, $safeEmail);

if ($querySent) {
    $acknowledgementSubject = 'We received your query';
    $acknowledgementBody = "Hello {$safeName},\n\n";
    $acknowledgementBody .= "We received your mail. \n The TechnoSense team will contact you shortly.\n\n";
    $acknowledgementBody .= "Regards,\nTechnoSense Team\n";
    if (!sendEmail($smtpConfig, $safeEmail, $acknowledgementSubject, $acknowledgementBody, $inbox)) {
        error_log('Contact acknowledgement email could not be sent to ' . $safeEmail);
    }

    echo json_encode(['response' => 'success']);
    exit;
}

http_response_code(500);
echo json_encode(['response' => 'error', 'errorMessage' => 'Email delivery failed. Check the SMTP settings and Gmail App Password.']);
?>
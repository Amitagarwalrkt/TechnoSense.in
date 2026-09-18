<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=UTF-8');

function contactJsonError(string $message, int $status = 500): void
{
    http_response_code($status);
    echo json_encode(['response' => 'error', 'errorMessage' => $message]);
    exit;
}

$exceptionPath = __DIR__ . '/vendor/phpmailer/src/Exception.php';
$phpmailerPath = __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
$smtpPath = __DIR__ . '/vendor/phpmailer/src/SMTP.php';
$configPath = __DIR__ . '/smtp-config.php';

if (!is_file($exceptionPath) || !is_file($phpmailerPath) || !is_file($smtpPath)) {
    contactJsonError('Mail library is missing on the server. Upload the vendor/phpmailer folder.');
}

if (!is_file($configPath)) {
    contactJsonError('SMTP config missing. Upload smtp-config.php to the site root.');
}

require $exceptionPath;
require $phpmailerPath;
require $smtpPath;

$smtpConfig = require $configPath;

if (!is_array($smtpConfig)) {
    contactJsonError('SMTP config is invalid.');
}

if (trim((string) ($smtpConfig['password'] ?? '')) === '') {
    contactJsonError('Gmail SMTP is not configured. Add your Gmail App Password in smtp-config.php.');
}

function sendEmail(array $smtpConfig, string $recipient, string $subject, string $body, string $replyTo = ''): bool
{
    $mailer = new PHPMailer(true);

    try {
        $mailer->isSMTP();
        $mailer->Host = $smtpConfig['host'];
        $mailer->SMTPAuth = true;
        $mailer->Username = $smtpConfig['username'];
        $mailer->Password = preg_replace('/\s+/', '', (string) $smtpConfig['password']);
        $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mailer->Port = (int) $smtpConfig['port'];
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

try {
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
        contactJsonError('Invalid request method.', 405);
    }

    $name = trim((string) ($_POST['name'] ?? ''));
    $email = filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_SANITIZE_EMAIL);
    $phone = trim((string) ($_POST['phone'] ?? ''));
    $requirement = trim((string) ($_POST['requirement'] ?? ''));
    $message = trim((string) ($_POST['message'] ?? ''));

    if ($name === '' || $email === '' || $phone === '' || $requirement === '' || $message === '') {
        contactJsonError('Please fill in all required fields.', 400);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        contactJsonError('Please enter a valid email address.', 400);
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

    if (!$querySent) {
        contactJsonError('Email delivery failed. Check the SMTP settings and Gmail App Password.');
    }

    $acknowledgementSubject = 'We received your query';
    $acknowledgementBody = "Hello {$safeName},\n\n";
    $acknowledgementBody .= "We received your mail.\nThe TechnoSense team will contact you shortly.\n\n";
    $acknowledgementBody .= "Regards,\nTechnoSense Team\n";

    if (!sendEmail($smtpConfig, $safeEmail, $acknowledgementSubject, $acknowledgementBody, $inbox)) {
        error_log('Contact acknowledgement email could not be sent to ' . $safeEmail);
    }

    echo json_encode(['response' => 'success']);
} catch (Throwable $throwable) {
    error_log('Contact form fatal: ' . $throwable->getMessage());
    contactJsonError('Unable to send your message right now. Please try again or email info@technosense.in.');
}

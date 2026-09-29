<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=UTF-8');

/*
|--------------------------------------------------------------------------
| JSON Error Helper
|--------------------------------------------------------------------------
*/
function contactJsonError(string $message, int $status = 500): void
{
    http_response_code($status);

    echo json_encode([
        'response' => 'error',
        'errorMessage' => $message
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| File Paths
|--------------------------------------------------------------------------
*/
$exceptionPath = __DIR__ . '/vendor/phpmailer/src/Exception.php';
$phpmailerPath = __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
$smtpPath     = __DIR__ . '/vendor/phpmailer/src/SMTP.php';
$configPath   = __DIR__ . '/smtp-config.php';
$logoPath     = __DIR__ . '/assets/android-chrome-192x192-DI05UMHt.png';

/*
|--------------------------------------------------------------------------
| Check PHPMailer
|--------------------------------------------------------------------------
*/
if (
    !is_file($exceptionPath) ||
    !is_file($phpmailerPath) ||
    !is_file($smtpPath)
) {
    contactJsonError(
        'Mail library is missing on the server. Upload the vendor/phpmailer folder.'
    );
}

/*
|--------------------------------------------------------------------------
| Check SMTP Config
|--------------------------------------------------------------------------
*/
if (!is_file($configPath)) {
    contactJsonError(
        'SMTP config missing. Upload smtp-config.php to the site root.'
    );
}

/*
|--------------------------------------------------------------------------
| Load PHPMailer
|--------------------------------------------------------------------------
*/
require $exceptionPath;
require $phpmailerPath;
require $smtpPath;

/*
|--------------------------------------------------------------------------
| Load SMTP Configuration
|--------------------------------------------------------------------------
*/
$smtpConfig = require $configPath;

if (!is_array($smtpConfig)) {
    contactJsonError('SMTP config is invalid.');
}

if (trim((string) ($smtpConfig['password'] ?? '')) === '') {
    contactJsonError(
        'Gmail SMTP is not configured. Add your Gmail App Password in smtp-config.php.'
    );
}

/*
|--------------------------------------------------------------------------
| Send Email
|--------------------------------------------------------------------------
*/
function sendEmail(
    array $smtpConfig,
    string $recipient,
    string $subject,
    string $body,
    string $replyTo = '',
    bool $isHtml = false,
    string $altBody = '',
    string $logoPath = ''
): bool {
    $mailer = new PHPMailer(true);

    try {
        /*
        | SMTP configuration
        */
        $mailer->isSMTP();
        $mailer->Host = (string) ($smtpConfig['host'] ?? 'smtp.gmail.com');
        $mailer->SMTPAuth = true;
        $mailer->Username = (string) ($smtpConfig['username'] ?? '');

        // Remove spaces from Gmail App Password.
        $mailer->Password = preg_replace(
            '/\s+/',
            '',
            (string) ($smtpConfig['password'] ?? '')
        );

        $mailer->Port = (int) ($smtpConfig['port'] ?? 587);

        // Gmail: 465 = implicit SSL, 587 = STARTTLS.
        if ($mailer->Port === 465) {
            $mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        } else {
            $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        }

        $mailer->CharSet = 'UTF-8';
        $mailer->Timeout = 8;

        /*
        | From
        */
        $fromEmail = (string) ($smtpConfig['from_email'] ?? $smtpConfig['username'] ?? '');
        $fromName  = (string) ($smtpConfig['from_name'] ?? 'TechnoSense Team');

        if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid SMTP from email address.');
        }

        $mailer->setFrom($fromEmail, $fromName);

        /*
        | Recipient
        */
        $mailer->addAddress($recipient);

        /*
        | Reply-To
        */
        if ($replyTo !== '' && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
            $mailer->addReplyTo($replyTo);
        }

        /*
        | HTML / Plain Text
        */
        if ($isHtml) {
            $mailer->isHTML(true);

            if ($altBody !== '') {
                $mailer->AltBody = $altBody;
            }

            /*
            | Embed logo directly into the email.
            | This avoids Gmail/Outlook blocking the remote image URL.
            */
            if ($logoPath !== '' && is_readable($logoPath)) {
                $mailer->addEmbeddedImage(
                    $logoPath,
                    'technosense-logo',
                    'technosense-logo.png',
                    'base64',
                    'image/png'
                );
            }
        } else {
            $mailer->isHTML(false);
        }

        $mailer->Subject = $subject;
        $mailer->Body = $body;

        /*
        | Send
        */
        $mailer->send();

        return true;

    } catch (Exception $exception) {
        error_log(
            'Contact email error: ' . $exception->getMessage()
        );

        return false;
    }
}

/*
|--------------------------------------------------------------------------
| Main Contact Form
|--------------------------------------------------------------------------
*/
try {
    /*
    | Only POST requests allowed
    */
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
        contactJsonError(
            'Invalid request method.',
            405
        );
    }

    /*
    | Get form data
    */
    $name = trim(
        (string) ($_POST['name'] ?? '')
    );

    $email = filter_var(
        trim((string) ($_POST['email'] ?? '')),
        FILTER_SANITIZE_EMAIL
    );

    $phone = trim(
        (string) ($_POST['phone'] ?? '')
    );

    $requirement = trim(
        (string) ($_POST['requirement'] ?? '')
    );

    $message = trim(
        (string) ($_POST['message'] ?? '')
    );

    /*
    | Validate required fields
    */
    if (
        $name === '' ||
        $email === '' ||
        $phone === '' ||
        $requirement === '' ||
        $message === ''
    ) {
        contactJsonError(
            'Please fill in all required fields.',
            400
        );
    }

    /*
    | Validate email
    */
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        contactJsonError(
            'Please enter a valid email address.',
            400
        );
    }

    /*
    | Sanitize values
    */
    $inbox = 'amitagarwalrkt@gmail.com';

    $safeName = str_replace(
        ["\r", "\n"],
        '',
        $name
    );

    $safeEmail = str_replace(
        ["\r", "\n"],
        '',
        $email
    );

    $safeRequirement = str_replace(
        ["\r", "\n"],
        '',
        $requirement
    );

    /*
    |--------------------------------------------------------------------------
    | Main Enquiry Email
    |--------------------------------------------------------------------------
    */
    $subject =
        'New Contact Form Query: ' .
        $safeRequirement;

    $body =
        "Name: {$safeName}\n" .
        "Email: {$safeEmail}\n" .
        "Phone: {$phone}\n" .
        "Requirement: {$safeRequirement}\n\n" .
        "Message:\n{$message}\n";

    /*
    |--------------------------------------------------------------------------
    | Send Main Enquiry
    |--------------------------------------------------------------------------
    */
    $querySent = sendEmail(
        $smtpConfig,
        $inbox,
        $subject,
        $body,
        $safeEmail,
        false
    );

    /*
    |--------------------------------------------------------------------------
    | If Main Email Failed
    |--------------------------------------------------------------------------
    */
    if (!$querySent) {
        contactJsonError(
            'Email delivery failed. Check the SMTP settings and Gmail App Password.'
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Return SUCCESS to browser immediately
    |--------------------------------------------------------------------------
    */
    echo json_encode([
        'response' => 'success',
        'message' => 'Your message has been sent successfully.'
    ]);

    /*
    | Finish browser response before sending acknowledgement email.
    */
    if (function_exists('fastcgi_finish_request')) {
        fastcgi_finish_request();
    }

    /*
    |--------------------------------------------------------------------------
    | Acknowledgement Email
    |--------------------------------------------------------------------------
    */
    $acknowledgementSubject =
        'Thank You for Contacting TechnoSense';

    /*
    | IMPORTANT:
    | Logo is embedded using CID, not a remote URL.
    */
    $logoCid = 'cid:technosense-logo';

    /*
    | HTML acknowledgement email
    */
    $acknowledgementBody =
        "<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Thank You - TechnoSense</title>
</head>
<body style='margin:0; padding:0; background:#f5f5f5; font-family:Arial,Helvetica,sans-serif; color:#333333;'>

    <div style='max-width:650px; margin:30px auto; background:#ffffff; padding:35px; border-radius:8px; box-sizing:border-box;'>

        <!-- Logo -->
        <div style='margin-bottom:30px; text-align:left;'>
            <img
                src='{$logoCid}'
                alt='TechnoSense'
                width='180'
                style='width:180px; max-width:100%; height:auto; display:block; border:0; outline:none; text-decoration:none;'
            >
        </div>

        <!-- Greeting -->
        <p style='font-size:16px; margin:0 0 18px 0;'>
            Hi <strong>{$safeName}</strong>,
        </p>

        <!-- Introduction -->
        <p style='font-size:15px; line-height:1.7; margin:0 0 18px 0;'>
            Thank you for contacting <strong>TechnoSense</strong>.
            We truly appreciate your interest in our services
            and taking the time to reach out to us.
        </p>

        <!-- Confirmation -->
        <p style='font-size:15px; line-height:1.7; margin:0 0 18px 0;'>
            We have successfully received your enquiry.
            Our team has been notified and will carefully review
            the details you have shared with us.
        </p>

        <!-- Next Step -->
        <p style='font-size:15px; line-height:1.7; margin:0 0 18px 0;'>
            One of our team members will get back to you shortly
            to discuss your requirements and assist you with
            the next steps.
        </p>

        <!-- Additional Information -->
        <p style='font-size:15px; line-height:1.7; margin:0 0 18px 0;'>
            If you have any additional information, requirements,
            or questions that you would like to share in the meantime,
            please feel free to reply to this email.
        </p>

        <!-- Closing -->
        <p style='font-size:15px; line-height:1.7; margin:0 0 25px 0;'>
            We look forward to connecting with you and exploring
            how <strong>TechnoSense</strong> can assist you.
        </p>

        <!-- Signature -->
        <p style='font-size:15px; line-height:1.6; margin:0;'>
            Best Regards,<br>
            <strong>TechnoSense Team</strong><br>
            <span style='color:#777777;'>
                Thank you for choosing TechnoSense.
            </span>
        </p>

    </div>

</body>
</html>";

    /*
    |--------------------------------------------------------------------------
    | Plain-text fallback
    |--------------------------------------------------------------------------
    */
    $acknowledgementAltBody =
        "Hi {$safeName},\n\n" .
        "Thank you for contacting TechnoSense.\n\n" .
        "We truly appreciate your interest in our services " .
        "and taking the time to reach out to us.\n\n" .
        "We have successfully received your enquiry. " .
        "Our team has been notified and will carefully review " .
        "the details you have shared with us.\n\n" .
        "One of our team members will get back to you shortly " .
        "to discuss your requirements and assist you with the next steps.\n\n" .
        "If you have any additional information, requirements, " .
        "or questions that you would like to share in the meantime, " .
        "please feel free to reply to this email.\n\n" .
        "We look forward to connecting with you and exploring " .
        "how TechnoSense can assist you.\n\n" .
        "Best Regards,\n" .
        "TechnoSense Team\n" .
        "Thank you for choosing TechnoSense.";

    /*
    |--------------------------------------------------------------------------
    | Send acknowledgement
    |--------------------------------------------------------------------------
    */
    sendEmail(
        $smtpConfig,
        $safeEmail,
        $acknowledgementSubject,
        $acknowledgementBody,
        $inbox,
        true,
        $acknowledgementAltBody,
        $logoPath
    );

} catch (Throwable $throwable) {
    error_log(
        'Contact form fatal: ' .
        $throwable->getMessage()
    );

    contactJsonError(
        'Unable to send your message right now. Please try again or email info@technosense.in.'
    );
}

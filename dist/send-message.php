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
$smtpPath      = __DIR__ . '/vendor/phpmailer/src/SMTP.php';

$configPath = __DIR__ . '/smtp-config.php';


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
| Send Email Function
|--------------------------------------------------------------------------
*/

function sendEmail(
    array $smtpConfig,
    string $recipient,
    string $subject,
    string $body,
    string $replyTo = '',
    bool $isHtml = false,
    string $altBody = ''
): bool {

    $mailer = new PHPMailer(true);

    try {

        /*
         * SMTP configuration
         */
        $mailer->isSMTP();

        $mailer->Host = $smtpConfig['host'];

        $mailer->SMTPAuth = true;

        $mailer->Username = $smtpConfig['username'];

        /*
         * Remove spaces from Gmail App Password
         */
        $mailer->Password = preg_replace(
            '/\s+/',
            '',
            (string) $smtpConfig['password']
        );

        $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

        $mailer->Port = (int) $smtpConfig['port'];


        /*
         * Email encoding
         */
        $mailer->CharSet = 'UTF-8';


        /*
         * SMTP timeout
         */
        $mailer->Timeout = 8;


        /*
         * From
         */
        $mailer->setFrom(
            $smtpConfig['from_email'],
            $smtpConfig['from_name']
        );


        /*
         * Recipient
         */
        $mailer->addAddress($recipient);


        /*
         * Reply-To
         */
        if ($replyTo !== '') {
            $mailer->addReplyTo($replyTo);
        }


        /*
         * HTML / Plain Text
         */
        if ($isHtml) {

            $mailer->isHTML(true);

            /*
             * Plain-text fallback for email clients
             * that don't support HTML.
             */
            if ($altBody !== '') {
                $mailer->AltBody = $altBody;
            }

        } else {

            $mailer->isHTML(false);
        }


        /*
         * Subject
         */
        $mailer->Subject = $subject;


        /*
         * Body
         */
        $mailer->Body = $body;


        /*
         * Send
         */
        $mailer->send();

        return true;

    } catch (Exception $exception) {

        error_log(
            'Contact email error: ' .
            $exception->getMessage()
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
     * Only POST requests allowed
     */
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {

        contactJsonError(
            'Invalid request method.',
            405
        );
    }


    /*
     * Get form data
     */
    $name = trim(
        (string) ($\_POST['name'] ?? '')
    );

    $email = filter_var(
        trim((string) ($\_POST['email'] ?? '')),
        FILTER_SANITIZE_EMAIL
    );

    $phone = trim(
        (string) ($\_POST['phone'] ?? '')
    );

    $requirement = trim(
        (string) ($\_POST['requirement'] ?? '')
    );

    $message = trim(
        (string) ($\_POST['message'] ?? '')
    );


    /*
     * Validate required fields
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
     * Validate email
     */
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        contactJsonError(
            'Please enter a valid email address.',
            400
        );
    }


    /*
     * Sanitize values
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
    |
    | The user should NOT wait for the acknowledgement email.
    |
    */

    echo json_encode([
        'response' => 'success',
        'message' => 'Your message has been sent successfully.'
    ]);


    /*
    |--------------------------------------------------------------------------
    | Finish browser request
    |--------------------------------------------------------------------------
    |
    | PHP-FPM sends the response to the browser here.
    | The acknowledgement email can continue afterward.
    |
    */

    if (function_exists('fastcgi_finish_request')) {

        fastcgi_finish_request();

    } else {

        /*
         * Fallback if FastCGI function isn't available.
         */
        if (ob_get_level() > 0) {
            ob_end_flush();
        }

        flush();
    }


    /*
    |--------------------------------------------------------------------------
    | Continue processing after browser response
    |--------------------------------------------------------------------------
    */

    ignore_user_abort(true);


    /*
    |--------------------------------------------------------------------------
    | Acknowledgement Email
    |--------------------------------------------------------------------------
    */

    $acknowledgementSubject =
        'Thank You for Contacting TechnoSense';


    /*
    |--------------------------------------------------------------------------
    | TechnoSense Logo
    |--------------------------------------------------------------------------
    |
    | IMPORTANT:
    | This must be a PUBLIC HTTPS URL.
    |
    */

    $logoUrl =
        'https://technosense.in/assets/android-chrome-192x192-DI05UMHt.png';


    /*
    |--------------------------------------------------------------------------
    | HTML Acknowledgement Email
    |--------------------------------------------------------------------------
    */

    $acknowledgementBody =

        "<!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Thank You - TechnoSense</title>
        </head>

        <body style='
            margin:0;
            padding:0;
            background:#f5f5f5;
            font-family:Arial,Helvetica,sans-serif;
            color:#333333;
        '>

            <div style='
                max-width:650px;
                margin:30px auto;
                background:#ffffff;
                border:1px solid #e5e5e5;
                border-radius:8px;
                overflow:hidden;
            '>

                <!-- Main Content -->

                <div style='
                    padding:35px;
                '>

                    <!-- Logo -->

                    <div style='
                        margin-bottom:30px;
                        text-align:left;
                    '>

                        <img
                            src='{$logoUrl}'
                            alt='TechnoSense'
                            width='180'
                            style='
                                width:180px;
                                max-width:100%;
                                height:auto;
                                display:block;
                                border:0;
                                outline:none;
                                text-decoration:none;
                            '
                        >

                    </div>


                    <!-- Greeting -->

                    <p style='
                        font-size:16px;
                        line-height:1.6;
                        margin:0 0 18px 0;
                    '>

                        Hi <strong>{$safeName}</strong>,

                    </p>


                    <!-- Introduction -->

                    <p style='
                        font-size:15px;
                        line-height:1.7;
                        margin:0 0 18px 0;
                    '>

                        Thank you for contacting
                        <strong>TechnoSense</strong>.
                        We truly appreciate your interest in our services
                        and taking the time to reach out to us.

                    </p>


                    <!-- Confirmation -->

                    <p style='
                        font-size:15px;
                        line-height:1.7;
                        margin:0 0 18px 0;
                    '>

                        We have successfully received your enquiry.
                        Our team has been notified and will carefully review
                        the details you have shared with us.

                    </p>


                    <!-- Next Step -->

                    <p style='
                        font-size:15px;
                        line-height:1.7;
                        margin:0 0 18px 0;
                    '>

                        One of our team members will get back to you shortly
                        to discuss your requirements and assist you with
                        the next steps.

                    </p>


                    <!-- Additional Information -->

                    <p style='
                        font-size:15px;
                        line-height:1.7;
                        margin:0 0 18px 0;
                    '>

                        If you have any additional information, requirements,
                        or questions that you would like to share in the meantime,
                        please feel free to reply to this email.

                    </p>


                    <!-- Closing -->

                    <p style='
                        font-size:15px;
                        line-height:1.7;
                        margin:0 0 25px 0;
                    '>

                        We look forward to connecting with you and exploring
                        how <strong>TechnoSense</strong> can assist you.

                    </p>


                    <!-- Signature -->

                    <p style='
                        font-size:15px;
                        line-height:1.6;
                        margin:0;
                    '>

                        Best Regards,<br>

                        <strong>TechnoSense Team</strong><br>

                        <span style='color:#777777;'>
                            Thank you for choosing TechnoSense.
                        </span>

                    </p>

                </div>

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
    | Send Acknowledgement
    |--------------------------------------------------------------------------
    */

    sendEmail(
        $smtpConfig,
        $safeEmail,
        $acknowledgementSubject,
        $acknowledgementBody,
        $inbox,
        true,
        $acknowledgementAltBody
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
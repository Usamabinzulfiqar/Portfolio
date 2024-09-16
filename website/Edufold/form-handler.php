<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@yourwebsite.com';
$email_subject = 'New Form Submission';
$email_body = "User Name:$name.\n".
              "User Email: $visitor_email.\n"
              "subject: $subject.\n".
                "User Message: $message .\n";

$to = 'binzulfiqarusama08@gmail.com';

$headers = "From: $emailfrom\r\n";

$headers .= "Replay-To: $visitor_email \r\n";


mail($to,$email_subject,$email_body,$headers);

haeder("Location: contact.html");






?>

























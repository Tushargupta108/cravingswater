<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "cravingswaterh02@gmail.com";  // Change this to your email
    $subject = "New Inquiry from Cravings Water Website";
    $headers = "From: " . $email . "\r\n";
    
    $fullMessage = "Name: $name\n";
    $fullMessage .= "Email: $email\n";
    $fullMessage .= "Message: $message\n";

    mail($to, $subject, $fullMessage, $headers);
    
    echo "Inquiry sent successfully!";
}
?>

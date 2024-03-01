<?php
// Database credentials
$host = "127.0.0.1";
$dbname = "client";
$username = "root";
$password = "root";

// Create a connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $product = $_POST["product"];
    $message = $_POST["message"];

    // Insert data into the database
    $sql = "INSERT INTO feedback (name, email, phone, product,  message) 
            VALUES ('$name', '$email', '$phone','$product', '$message')";

    if ($conn->query($sql) === TRUE) {
         echo "<script type='text/javascript'> 
                        alert('Thank You for your Feedback.'); 
                        window.location.href = '/index.html';
                      </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();

//send data to email
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $product = $_POST["product"];
    $message = $_POST["message"];
    // Create a PHPMailer object
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'softapper15@gmail.com'; // Your SMTP username
        $mail->Password = 'ypbu iflo jxst gvbb'; // Your SMTP password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('softapper15@gmail.com', 'Softapper');
        $mail->addAddress('kaushalrajpoot38@gmail.com');// Use $email instead of $userEmail

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Feedback Form Submission';
        $mail->Body = "<p><strong>Name:</strong> $name</p>
                      <p><strong>Email:</strong> $email</p>
                      <p><strong>Phone:</strong> $phone</p>
                      <p><strong>Product:</strong> $product</p>
                      <p><strong>Message:</strong><br> $message</p>";

        // Send email
        $mail->send();
        echo "Your message has been sent successfully!";
    } catch (Exception $e) {
        echo "Error sending the message. Please try again later. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
?>
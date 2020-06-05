<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if (empty($_POST['name']) && empty($_POST['mail'])) die();

if(isset($_POST['submit'])){
    http_response_code(200);

    $name = $_POST['name'];
    $to = 'darrylbrooks13@gmail.com';
    $from = $_POST['mail'];
    $subject = "New Contact Submission From: ".$name;
    $message = $_POST['message'];

    
    // $headers = "From: ".$from;
    $headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";

    mail($to,$subject,$message,$headers);
    header("Location: localhost:3000/contact");
}
?>
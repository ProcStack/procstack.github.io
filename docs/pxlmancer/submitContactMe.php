<?php
$page=basename($_SERVER['SCRIPT_NAME']);
$err=0;
// Send posted email
if(count($_POST)>0 && !isset($_GET['name']) && !isset($_GET['email']) && !isset($_GET['comment'])){
	$to  = "pxl@pxlmancer.com";

	$subject = 'Pixelmancer contact from - '.$_POST["name"];

	$message = $_POST["comment"];
	if($_POST["comment"] != "" && ($_POST["email"] != "" && strpos($_POST["email"], '@') !== false)){

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'To: Kevin Edzenga <pxl@pxlmancer.com>' . "\r\n";
		$headers .= 'From: '.$_POST["name"].' <'.$_POST["email"].'>' . "\r\n";
		mail($to, $subject, $message, $headers);


		$to  = $_POST["email"];

		$subject = 'Pixelmancer contact from - '.$_POST["name"];

		$message = "Thank you for your email, I'll get back to you shortly.\n -Kevin";

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'To: '.$_POST["name"].' <'.$_POST["email"].'>' . "\r\n";
		$headers .= 'From: Kevin Edzenga <pxl@pxlmancer.com>' . "\r\n";
		mail($to, $subject, $message, $headers);
	}
}else{
	$err=1;
	header("Location: http://pxlmancer.com");
	exit();
}
?>

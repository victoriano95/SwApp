<?php

	$incomingContentType = $_SERVER['CONTENT_TYPE'];
	if($incomingContentType != 'application/json'){
		header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error ');
		exit();
	}
	$decoded = json_decode(trim(file_get_contents("php://input")));
	header('Content Type: application/json');
	echo $decoded;
?>
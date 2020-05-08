<?php

	// Handling data in JSON format on the server-side using PHP
	//
	echo "AHJFBUSJEHB";
	//header("Content-Type: application/json");
	// build a PHP variable from JSON sent using POST method
	$v = json_decode(stripslashes(file_get_contents("php://input")));
	// encode the PHP variable to JSON and send it back on client-side
	echo "AHJFBUSJEHB";
	echo json_encode($v);
?>
<?php

$nombre = $_GET['nombre'];
$edad   = $_GET['edad'];

$edad = $edad + 100;

$myObj = array("name" => $nombre, "age" => $edad);

$myJSON = json_encode($myObj);

echo $myJSON;

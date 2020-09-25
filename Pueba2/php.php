<?php

$dolar = $_GET['dolar'];

$resultado = $dolar * 1.22;

$myObj = array("dolar" => $resultado);

$myJSON = json_encode($myObj);

echo $myJSON;

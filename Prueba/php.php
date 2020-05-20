<?php

if (isset($_POST["nombre"]) && isset($_POST["edad"]) {

    $nombre = $_POST["nombre"];
    $edad = $_POST["edad"];

    $resultado = array("nombre"=>$nombre, "edad"=>$edad);

$resultado = json_encode($resultado);

echo $resultado;

}
$myJSON = json_encode($myArr);

// $myArr = array("John", "Mary", "Peter", "Sally");

// $myJSON = json_encode($myArr);

// echo $myJSON;


 

$min = 144.04 ;
			
	function creditvalor(){

		for ($Credits = 1; $Credits <=18;$Credits= $Credits+1)
			{
			echo '<tr>';
			echo "<td> $Credits </td>";
			echo "<td> calcule(); </td>";
			echo  '</tr>';
			}
		}

function calcule()
	{

	

	$min=$min+144.04;

	return echo $min;
	

}

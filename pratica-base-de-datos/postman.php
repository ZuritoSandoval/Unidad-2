<?php

require ("Conexion.php");
$nombre="";
$edad="";
if (isset($_POST["nombre"]))
{
    $nombre=$_POST["nombre"];
}

if(isset($_POST["edad"])){
    $edad = $_POST["edad"];
}

$sql="INSERT INTO datos (nombre, edad)  VALUES ('$nombre','$edad')";

if(mysqli_query($conn, $sql)){
    echo "New record create successfully";
} else {
    echo "Error: " .$sql. "<br>". mysqli_error($conn);
}

?>
<?php

echo "hola: ". $_POST['nombre'];
$nombre=$_POST['nombre'];
$apeido=$_POST['apellido'];
$sexo=$_POST['sexo'];


if(isset($_POST['pais'])){
    $pais=$_POST['pais'];
    echo" estas desntro";
}

?>
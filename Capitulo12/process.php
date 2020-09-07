<?php
require 'conexion.php';

$nombre = $_GET['nombre'];

if (!empty($nombre)) {

    $persona=mysqli_real_escape_string($con, $nombre);
    $resultBD=mysqli_query($con, "SELECT * FROM persona WHERE nombre LIKE '%".$persona."%'");
    
    while ($fila = mysqli_fetch_assoc($resultBD)) {
        echo $fila['nombre'].' ';

    }
    
} 

mysqli_close($con);
?>
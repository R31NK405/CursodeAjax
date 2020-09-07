<?php

require 'conexion.php';

$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$fecha=$_POST['fecha'];

//echo "Gracias " . $nombre. $apellido; 
if (empty($nombre) || empty($apellido) || empty($fecha)) {
    echo "<span style='color: darkred';>"."Ingrese sus datos porfavor"."</span>";
} else {
    $resultDB=mysqli_query($con, "INSERT INTO persona VALUES('', '$nombre', '$apellido', '$fecha')");
    echo "<span style='color: yellowgreen';>"."Usuario inscrito con exito"."</span>";
}
mysqli_close($con);
?>
<?php
require 'conexion.php';

$usuario = $_GET['usuario'];
$usuario = (int)$usuario;

$resultBD=mysqli_query($con, "SELECT * FROM persona WHERE id = $usuario");

$usersBD="";

$usersBD="<h1>Clase del profesor San Juan Bosco</h1>";
$usersBD.="<table border='1'>";
$usersBD.="<tr>";
$usersBD.="<th>Nombre</th>";
$usersBD.="<th>Apellido</th>";
$usersBD.="<th>Fecha De Nacimiento</th>";
$usersBD.="</tr>";

while ($fila = mysqli_fetch_assoc($resultBD)) {
    $usersBD.="<tr>";
    $usersBD.="<td>".$fila['nombre']."</td>";
    $usersBD.="<td>".$fila['apellido']."</td>";
    $usersBD.="<td>".$fila['Fecha']."</td>";
    $usersBD.="</tr>";
}

$usersBD.="</table>";
echo $usersBD;
mysqli_close($con);
?>
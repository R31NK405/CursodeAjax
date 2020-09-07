<?php
require 'conexion.php';
$resultBD=mysqli_query($con, "SELECT * FROM persona");
$usersBD="";
$usersBD="<h1>Clase del profesor San Juan Bosco</h1>";
$usersBD.="<table border='1'>";
$usersBD.="<tr>";
$usersBD.="<th>Nombre</th>";
$usersBD.="<th>Apellido</th>";
$usersBD.="<th>Fecha De Nacimiento</th>";
$usersBD.="<th>edad</th>";
$usersBD.="</tr>";

while ($fila = mysqli_fetch_assoc($resultBD)) {
    $usersBD.="<tr>";
    $usersBD.="<td>".$fila['nombre']."</td>";
    $usersBD.="<td>".$fila['apellido']."</td>";
    $usersBD.="<td>".$fila['Fecha']."</td>";
    $usersBD.="<td>".$fila['edad']."</td>";
    $usersBD.="</tr>";
}
$usersBD.="</table>";
echo $usersBD;
mysqli_close($con);
?>
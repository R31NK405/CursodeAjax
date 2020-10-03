<?php
require "conexion.php";
$nombre = $_GET["nombre"];
//$nombre = empty($_GET["nombre"]) ? ""  : $_GET["nombre"];

if(!empty($nombre)){
 $cliente = mysqli_real_escape_string($con, $nombre);
 $resultado = mysqli_query($con, "SELECT * FROM persona WHERE nombre LIKE '%".$cliente."%'");
//Fila para mostrar los usuarios en una bd
 while($row = mysqli_fetch_assoc($resultado))
 {
    echo '<div class="myClass" onclick="toggleOverlay(this)">' .$row['nombre'] . '</div>';
    echo '<input type="hidden" disabled value="'.$row['apellido'].'">';
    echo '<input type="hidden" disabled value="'.$row['Fecha'].'">';
    echo '<input type="hidden" disabled value="'.$row['edad'].'">';
 }
 mysqli_close($con);
}else{
    mostrarDatos();
}

function mostrarDatos(){
    require 'conexion.php';


    $result=mysqli_query($con, "SELECT * FROM persona"); 

    while ($row= mysqli_fetch_assoc($result)) {
        echo '<div class="myClass" onclick="toggleOverlay(this)">' .$row['nombre'] . '</div>';
        echo '<input type="hidden" disabled value="'.$row['apellido'].'">';
        echo '<input type="hidden" disabled value="'.$row['Fecha'].'">';
        echo '<input type="hidden" disabled value="'.$row['edad'].'">';
        }
        mysqli_close($con);//cierre de la conexion
}
?>
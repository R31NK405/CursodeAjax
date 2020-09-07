<?php
require "conexion.php";
//$nombre=$_GET["nombre"];
$nombre = empty($_GET["nombre"]) ? ""  : $_GET["nombre"]; 
if(!empty($nombre)){
 $cliente = mysqli_real_escape_string($con, $nombre);
 $resultado = mysqli_query($con, "SELECT * FROM persona WHERE nombre LIKE '%".$cliente."%'");

 while($fila = mysqli_fetch_assoc($resultado))
 {
  echo '<div class="miClase">' .$fila['nombre'] . '</div>';
 }
 mysqli_close($con);
}else{
    mostrarDatos();
}

function mostrarDatos(){
    require 'conexion.php';

    //realizar consultas desde la base de datos
    $result=mysqli_query($con, "SELECT * FROM persona"); 

    while ($row= mysqli_fetch_assoc($result)) {
        echo "<div class=myClass>". $row['nombre'] . " " . "</div>";//extraccion de los nombres en la base de datos
        //echo '<input type="hidden" disabled value="'.$row['apellido'].'">';
        }
        mysqli_close($con);//cierre de la conexion
}
?>


<?php
  /*Que es obligatorio y que si no se encuentra la página no funciona, el script no se sigue ejecutando.*/
  require 'conexion.php';

 $name = empty($_GET["nombre"]) ? ""  : $_GET["nombre"]; 
 /*Que si el nombre no está vacio, es decir que el usuario ya digito algún nombre*/
 if(!empty($name)){
     /*El nombre de la variable que nos permite conecta con la base de datos, y el valor obtenido del get*/
  $cliente=mysqli_real_escape_string($con,$name);
  $resultado=mysqli_query($con,"SELECT * FROM persona WHERE nombre LIKE '%$cliente%'");
  while($fila = mysqli_fetch_assoc($resultado))
  {
   echo '<div class="myClass" onclick="toggleOverlay()">' .$fila['nombre'] . '</div>';
  }
  mysqli_close($con);
 }else{
     /*Si el usuario no ha digitado ningun nombre*/
  mostrarUsuario();
 }
 function mostrarUsuario(){
    require 'conexion.php';
  $resultado=mysqli_query($con,"SELECT * FROM persona");
  while($fila = mysqli_fetch_assoc($resultado))
  {
   echo '<div class="myClass" onclick="toggleOverlay()">' .$fila['nombre'] . '</div>';
  }
 }
 mysqli_close($con);
?>
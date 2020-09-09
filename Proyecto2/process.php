<?php 

require 'conexion.php';

$personas =$_GET["personas"];
//$personas = empty($_GET["personas"]) ? ""  : $_GET["personas"];

$nombreId="nombreId";
$nacionalidadId="nacionalidadId";
$actualizar="actualizar";
$eliminar="eliminar";
$tabla="";

if ($personas == "personas") {
   $result=mysqli_query($con, "SELECT * FROM usuarios");
   $tabla .='<div class="container">';
   $tabla .='<table class = "table table-striped table-bordered">';
   $tabla .='<tr>';
   $tabla .='<th>Usuario</th>';
   $tabla .='<th>Nombre</th>';
   $tabla .='<th>Nacionalidad</th>';
   $tabla .='<th>Editar</th>';
   $tabla .='<th>Eliminar</th>';
   $tabla .='</tr>';
    while ($row = mysqli_fetch_assoc($result)) {
        $tabla .='<tr>';
        $tabla .='<td>'.$row['id'].'</td>';
        $tabla.='<td id="'.$nombreId.$row['id'].'">'.$row['nombre'].'</td>';
        $tabla.='<td id="'.$nacionalidadId.$row['id'].'">'.$row['nacionalidad'].'</td>';
        $tabla .='<td><input type="button" id="'.$row['id'].'" onclick="editarUsuarios(this.id)" value="Editar" class="btn btn-default"></td>';
        $tabla .='<td><input type="button" id="'.$eliminar.$row['id'].'" value="Eliminar" class="btn btn-danger"></td>';
        $tabla .='<td><input type="button"  id="'.$actualizar.$row['id'].'"  value="Actualizar" class="btn btn-primary" style=display:none;></td>';
        $tabla .='</tr>';
    }
}

echo $tabla;
mysqli_close($con);
?>
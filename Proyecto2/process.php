<?php 

require 'conexion.php';

$personas =$_GET["personas"];
$usuarioIdActualizado=$_GET['usuarioIdActualizado'];
$nombreActualizado=$_GET['nombreActualizado'];
$usuarioIdEliminado=$_GET['usuarioIdEliminado'];
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
        $tabla .='<td><input type="button" id="'.$eliminar.$row['id'].'" onclick="eliminarUsuario('.$row['id'].')"value="Eliminar" class="btn btn-danger"></td>';
        $tabla .='<td><input type="button"  id="'.$actualizar.$row['id'].'" onclick="actualizarUsuario('.$row['id'].')" value="Actualizar" class="btn btn-primary" style=display:none;></td>';
        $tabla .='</tr>';
    }
    $tabla .='</table>';
    $tabla .='<button onclick="ejecutarVentana()" class="btn btn-primary">Agregar usuario</button><br><br>';
    $tabla .='</div>';
    echo $tabla;
    mysqli_close($con);
}


if (!empty($nombreActualizado)) {
    $cliente = mysqli_real_escape_string($con, $nombreActualizado);
    $result=mysqli_query($con, "UPDATE usuarios SET nombre = '$cliente' WHERE id = $usuarioIdActualizado");
    mysqli_close($con);
}
if(!empty($usuarioIdEliminado)){
    $result = mysqli_query($con, "DELETE FROM usuarios WHERE id = $usuarioIdEliminado");
    mysqli_close($con);
}
?>
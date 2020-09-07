<?php
require 'conexion.php';
$result=mysqli_query($con, "SELECT * FROM persona");//realizar consultas desde la base de datos
while ($row= mysqli_fetch_assoc($result)) {
    echo "<div class=myClass>". $row['nombre'] . " " . "</div>";//extraccion de los nombres en la base de datos
    echo '<input type="hidden" disabled value="'.$row['apellido'].'">';
    }
    mysqli_close($con);//cierre de la conexion
?>

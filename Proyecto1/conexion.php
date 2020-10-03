<?php
//conexion a la base de datos usando MySQLI
$host="localhost";
$user="root";
$pass="";
$name="dataajax";

$con = mysqli_connect($host, $user, $pass, $name);
if (mysqli_connect_errno()) {
    echo "Error: " . mysqli_connect_error(); 
}else{
   
}
?>
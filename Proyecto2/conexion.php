<?php
$host="localhost";
$user="root";
$pass="";
$name="crud";

$con = mysqli_connect($host, $user, $pass, $name);
if (mysqli_connect_errno()) {
    echo "Error: " . mysqli_connect_error(); 
}else{
   
}
?>
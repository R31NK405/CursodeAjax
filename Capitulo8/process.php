<?php
$num1=$_GET['num1'];
$num2=$_GET['num2'];
//$num1=$_POST['num1'];
//$num2=$_POST['num2'];
//ctype_digit: Verifica si todos los caracteres en la string entregada, text, son numéricos.


$respuesta=" ";
if (!ctype_digit($num1) || !ctype_digit($num2)) {
 $respuesta .= "Porfavor, ingrese 2 numeros";
}else {
    $respuesta.="<table>";
    $respuesta.="<tr><td>".$num1." + ".$num2. " = ".($num1+$num2)."</tr></td>";
    $respuesta.="<tr><td>".$num1." - ".$num2. " = ".($num1-$num2)."</tr></td>";
    $respuesta.="<tr><td>".$num1." * ".$num2. " = ".($num1*$num2)."</tr></td>";
    $respuesta.="<tr><td>".$num1." / ".$num2. " = ".round(($num1/$num2),2)."</tr></td>";
    $respuesta.="</table>";
}
echo $respuesta;
?>
<?php

/*
Substr: Devuelve una parte del string definida por los parámetros start y length.
stristr: Devuelve todo de haystack iniciando desde e incluyendo la primera aparición de needle hasta el final.
strlen: Devuelve la longitud del string dado.
strtolower: Devuelve un string con todos los caracteres alfabéticos convertidos a minúsculas.

Note que "alfabético" está determinado por la ubicación actual. Esto significa que por ejemplo, en la localidad "C" predeterminada, los caracteres como la diéresis-A (Ä) no serán convertidos.
$cadena = "Las palabras magicas son Aloha Mahummad";

$result=substr($cadena, 4, 16);
echo $result;
if ($result=stristr($cadena,"cas")) {
    
    echo "cas fue encontrada";
    }else {
        echo "cas no fue encontrada";
    }*/
    $personas = array("Alejandra","Amelia","Armando","Barbara", "Brandon", "Carlos", "Cesar","Consuelo",
                        "David", "Dillon", "Donald", "Emily", "Evert", "Fabian", "Fernanda", "Fido", "Forlan",
                        "Gabriela","Geronimo","Gina","Goraldo","Gustav", "Hipolito","Idelmo","Irma","Ivonna",
                        "Johann", "Kevin", "Kyle", "Lana", "Laurine", "Levin", "Loudres", "Marcos", "Maria",
                        "Meredith", "Milena", "Muriel","Nahuel","Naomi", "Norman","Ofelia", "Orlando", "Oswaldo",
                        "Paolo","Patricia","Pedro","Pineda","Posada","Purezas","Quincy","Ramon","Raul","Raymondo",
                        "Rellenta", "Rivera", "Rocio","Rodrigo","Ruben","Rulo","Samantha","Samuel", "Saul",
                        "Selena", "Serafin","Silvia","Simon","Sipan","Solomeo","Soma", "Sukarno","Tania","Tartaro",
                        "Teresa","Thiago","Timothy","Tomas","Turing","Uriel", "Uzcategui", "Valeria", "Venezia",
                        "Victor", "Vincenzo","Vogg","Walker","Windsor", "Witold","Wojtech","Wulfran","Xavier",
                        "Yesenia","Yordan", "Zaira","Zoraya");
    $nombre=$_GET['nombre'];
    $sugerencia="";
    if ($nombre!="") {
    $nombre=strtolower($nombre);
    $cantidadCaracteres=strlen($nombre);

    foreach ($personas as $key) {
       $nombreServidor=substr($key,0,$cantidadCaracteres);
       if (stristr($nombre,$nombreServidor)!== false) {
           if ($sugerencia === "") {
             $sugerencia=$key;
           }else{
               $sugerencia.= ", $key";
           }
       }
    }
}
    echo $sugerencia === "" ? "no fue encontrada": $sugerencia;
?>
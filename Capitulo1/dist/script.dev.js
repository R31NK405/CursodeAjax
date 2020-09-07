"use strict";

function ejecutarAjax() {
  /*//Declaracion de una variable para las petticiones
  var xhr;
  //verificar el tipo de navegador
  if (window.XMLHttpRequest) {
      //Con esto confirmamos que es para navegadores actuales
      xhr = new XMLHttpRequest;
  }else{
      //Por el contrario, se usara para navegadores antiguos
     new ActiveXObject("Microsoft.XMLHTTP");
  }
  */
  //declaracion del objeto 
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("info").innerHTML = xhr.responseText;
    }
  };

  xhr.open("GET", "texto.txt", true);
  xhr.send();
}
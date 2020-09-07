var result = document.getElementById("info");
function getAjax() {
  var xhr;
  if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
  } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }   
  //Esto es para cuando se manejan formularios
  var a = document.getElementById("nombre").value;
  var b = document.getElementById("apellido").value;
  var c = document.getElementById("fecha").value;
  var informacionDatos = "nombre="+a+"&apellido="+b+"&fecha="+c;

  xhr.onreadystatechange = function () {
      if(xhr.readyState===4&&xhr.status===200){
        result.innerHTML=xhr.responseText;
      }
  }
  //xhr.open("GET","process.php?"+informacionDatos,true);
  xhr.open("POST", "process.php", true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(informacionDatos);
}
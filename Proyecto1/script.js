
//Variable referencial para mostrar la informacion de elemento Show
var result = document.getElementById("show");
function getAjax() {
    //validacion de la peticion AJAX
    var xhr;
     //declaracion del objeto y validacion para naveggadores
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                result.innerHTML=xhr.responseText;
            }
        }
        xhr.open("GET", "process.php", true);
        xhr.send();
    }
    function mostrarUsuarios(nombre) {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }else{
            xhr=new ActiveXObject();
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState==4 && xhr.status==200) {
                result.innerHTML=xhr.responseText;
            }
        }
        xhr.open("get","process.php?nombre="+nombre, true);//->Informacion basica del Request conjunto a un parametro
        xhr.send();//>enviar datos al server
    } 
    //se usa para mas qe nada, crear una ventana con la informacion solicitada de un usuario
      function toggleOverlay(elemento) {
      var overlay = document.getElementById("overlay");
      var infoUsuario = document.getElementById("infoUsuario");
      var info = document.getElementById("info");

      overlay.style.opacity = .6;
      if (overlay.style.display == "block") {
          overlay.style.display = "none";
          infoUsuario.style.display = "none";
      }else{
        overlay.style.display = "block";
        infoUsuario.style.display = "block"; 
      }
      var nombre = elemento.innerHTML;
      var apellido = elemento.nextSibling.value;

      info.innerHTML = "<strong>Nombre: </strong>" + nombre + "<br>" + "<strong>Apellido: </strong>" + apellido;
   } 
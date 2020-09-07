var result = document.getElementById("info");

function getAjax() {
    //Inicializacion de variables
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else{
        xhr.ActiveXObject("Microsoft.XMLHTTP");
    }

    //Variables que recibiran los datos del formulario index.html
    var a = document.getElementById("nombre").value;
    var b = document.getElementById("apellido").value;
    //escribir una cadena para almacenar los datos del formularrio
    var informacionDelUsuario = "nombre=" + a + "&apellido=" + b;

        //se valida si lapeticion ha sido finalizada (4) y exitosa (200)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
           var mensaje = xhr.responseText;
           result.innerHTML = mensaje;
            }
    }
    //proceso para realizar perticionas a traves de formularios
    xhr.open("POST", "process.php", true);
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhr.send(informacionDelUsuario);
}
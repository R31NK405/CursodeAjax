//traer datos de un archivo JSON
function getJSON() {
    var xhr;
    var result = document.getElementById("info");
    //verificar el tipo de navegador
    if (window.XMLHttpRequest) {
        //Con esto confirmamos que es para navegadores actuales
        xhr = new XMLHttpRequest;
    }else{
        //Por el contrario, se usara para navegadores antiguos
        xhr =  new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange=function () {
        //se valida si lapeticion ha sido finalizada (4) y exitosa (200)
        if (xhr.readyState==4 && xhr.status==200) {
            //parsear el archivo JSON para ser leido por el servidor
            var data= JSON.parse(xhr.responseText);
       
   //Mostrar informacion de un JSONArray
   if (result.innerHTML=="") {
        for (var i in data) {
           result.innerHTML += data[i].nombre+ " " + data[i].apellido +" es de "+ data[i].pais + "<br>";
               }
            }
        }
    }
xhr.open("GET", "data.json", true);
xhr.send();
}
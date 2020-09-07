//traer datos de un archivo JSON
function getJSON() {
    var result = document.getElementById("info");
    var xhr;
    //verificar el tipo de navegador
    if (window.XMLHttpRequest) {
        //Con esto confirmamos que es para navegadores actuales
        xhr = new XMLHttpRequest;
    }else{
        //Por el contrario, se usara para navegadores antiguos
       new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange=function () {
         //se valida si lapeticion ha sido finalizada (4) y exitosa (200)
        if (xhr.readyState==4 && xhr.status==200) {
            //parsear el archivo JSON para ser leido por el servidor
            var data=JSON.parse(xhr.responseText);
           // console.log(data);

           //Mostrar informacion de un JSONArray
            if (result.innerHTML=="") {
                for (var i in data) {
                    result.innerHTML += i + ":" + data[i] + "<br>";
                }
            }
        }
    }
xhr.open("GET", "datos.json", true);
xhr.send();
}
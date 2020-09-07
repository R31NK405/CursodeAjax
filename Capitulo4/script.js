//Nested JSON: 
function ajaxGet() {
    var xhr;
      var result = document.getElementById("info");
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
        else{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
                 //se valida si lapeticion ha sido finalizada (4) y exitosa (200)
            if (xhr.readyState== 4 && xhr.status == 200) {
                    //parsear el archivo JSON para ser leido por el servidor
                var data = JSON.parse(xhr.responseText);

                //Mostrar informacion
                if (result.innerHTML=="") {
                //la variable i se concentrara en traer el primer valor, el nombre, ver data.json
                for (var i in data) {
                    result.innerHTML +=  "<br>"+ i + "<br>";
                    var person = data[i];

                    //la variable j se concentrara en traer el resto de la informacion, ver data.json
                   for (var j in person) {
                    result.innerHTML += j + ":" + person[j] + "<br>";
                       
                   }
                    
                }
            }
        }
    }
        xhr.open("GET", "data.json", true);
        xhr.send();
    }
function getJSON() {
    var xhr;
    var result = document.getElementById("info");

    if (window.XMLHttpRequest) {
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function(){
        
        if (xhr.readyState == 4 && xhr.status == 200) {
            //parsear el archivo JSON para ser leido por el servidor
            var data = JSON.parse(xhr.responseText);
             //Declarar una variable recibiendo el objetoJSON
            var edadMenor = encontrarEdadMenor(data);
               //Mostrar informacion de un JSONArray
            if (result.innerHTML=="") {
            result.innerHTML+="La edad menor es: " + edadMenor;
            }
        }
    }
    xhr.open("GET", "data.json", true);
    xhr.send();
}
function encontrarEdadMenor(ObjetoJSON) {
    //funcion ideal para mostrar la edad menor
    var arreglo = [];
    for (var i in ObjetoJSON) {
        var persona = ObjetoJSON[i];
        arreglo.push(persona.edad);
    }
    //Metodo para extraer la edad menor
// var edadMenor = arreglo[0];
  /*for (var j = 0; j < arreglo.length; j++) {
      if (arreglo[j]<edadMenor) {
          edadMenor=arreglo[j];
      }
      
  }*/
  //segundo metodo para extraer la edad menor
  
  var edadMenor = Math.min.apply(null,arreglo);
    return edadMenor;
}
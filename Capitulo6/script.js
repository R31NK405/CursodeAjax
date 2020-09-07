function getJSON(usuarioIngresado) {
      //declaracion del objeto 
    var xhr;
    var result = document.getElementById("info");
//verificar el tipo de navegador
    if (window.XMLHttpRequest) {
        //Con esto confirmamos que es para navegadores actuales
        xhr=new XMLHttpRequest;
    }else{
          //Por el contrario, se usara para navegadores antiguos
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //Referencia al parametro "usuarioIngresado"
    if (usuarioIngresado === 0) {
        result.innerHTML=" ";
    }
    else{
        xhr.onreadystatechange = function () {
             //se valida si lapeticion ha sido finalizada (4) y exitosa (200)
            if (xhr.readyState == 4 && xhr.status == 200) {
                    //parsear el archivo JSON para ser leido por el
                var data = JSON.parse(xhr.responseText);
                 //Mostrar informacion
                var x = encontrarPersona(data, usuarioIngresado);
                 //Mostrar informacion
                var mensaje = (x===true) ? "<span class='encontrado'>Si fue Encontrado</span>":
                                         "<span class='no-encontrado'>No fue Encontrado</span>";
                result.innerHTML=mensaje;
            }
        }
        xhr.open("GET", "data.json", true);
        xhr.send();
    }
}

//Leer los datos del JSON
function encontrarPersona(objetoJSON, usuario) {
    var arreglo = []; 
    for(var i in objetoJSON){
        //crear referencia y un push del arreglo JSON
        var persona = objetoJSON[i];
        arreglo.push(persona.nombre);
    }
    //Retornar datos del JSON
    return arreglo.indexOf(usuario) > -1;
}
//Se hace una referencia al DIV, para traer los resultados desde la base de datos
var result= document.getElementById("show");

function getAjax() {
    //declaracion de la variable
    var xhr; 
    //verificacion de navegadores
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");    
    }
    //verificacion de estado, confirmacion de peticion
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //si la peticion ha sido finalizada y exitosa se enviara una respuesta a la BD
            result.innerHTML = xhr.responseText;
        }
    }

    xhr.open("get","process.php", true);//->Informacion basica del Request
    xhr.send();//>enviar datos al server
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
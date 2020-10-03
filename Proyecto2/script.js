
//Variable referencial para mostrar la informacion de elemento Info
 var result = document.getElementById("info");
//mostrar los usuarios en conjunto a la creacion de la peticion AJAX
function getAjax() {
    //validacion de la peticion AJAX
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            result.innerHTML = xhr.responseText;
        }
    }
    xhr.open("get", "process.php?personas="+"personas", true);
    xhr.send();
}
getAjax();
//Funcion para editar usuarios por el parametro UsuarioId, que toma el valor ID en la base de datos
function editarUsuarios(usuarioId) {
    //Los nombres tienen que ser inequivocos al archivo Process.php
    var nombreId = "nombreId" + usuarioId;
    var nacionalidadId = "nacionalidadId" + usuarioId;
    var eliminar = "eliminar" + usuarioId;
    var actualizar = "actualizar" + usuarioId;
    var editarNombreId = nombreId + "-editar";
    //manejo del DOM para editar usuarios, en este caso, el nombre
    var nombreDeUsuario = document.getElementById(nombreId).innerHTML;
    //se utiliza para tomar el ID de un usuario, se usa elementos padre y elementos hijos, este es el elemento padre
    var parent = document.querySelector("#" + nombreId);

    //se utiliza para tomar el ID de un usuario, se usa elementos padre y elementos hijos, estos son los elementos hijos
    if (parent.querySelector("#"+ editarNombreId) === null) {
       document.getElementById(nombreId).innerHTML = '<input type="text" id = "'+editarNombreId+'" value ="'+nombreDeUsuario+'">';
       document.getElementById(eliminar).disabled="true";
       //se le aplica CSS a traves del DOM
       document.getElementById(actualizar).style.display="block";
    }
}
//funcion para actualizar usuarios de la base de datos
function actualizarUsuario(usuarioId) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //Se crea una variable parra almacenar el nombre a actualizar junto con el parametro UsuarioId, que toma el valor ID
    var nombreActualizado = document.getElementById("nombreId" + usuarioId + "-editar").value;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getAjax();
        }
    }
    xhr.open("GET", "process.php?usuarioIdActualizado=" + usuarioId + "&nombreActualizado=" + nombreActualizado, true);
    xhr.send();
}

//Funcion dedicada para  eliminar usuarios de una base de datos
function eliminarUsuario(usuarioId) {
    var response = confirm("Seguro de que quieres eliminar a este usuario???");
    if(response === true){
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                getAjax();
            }
        }
        xhr.open("GET", "process.php?usuarioIdEliminado=" + usuarioId);
        xhr.send();
    }
}

var overlay = document.getElementById("overlay");
var ventana = document.getElementById("ventana");


//Para generar una ventana de agregacion, se usa mas que nada el CSS desde el DOM
function ejecutarVentana() {
    overlay.style.opacity = .5;

    if (overlay.style.display == "block") {
        overlay.style.display = "none";
        ventana.style.display = "none";
    }else{
        overlay.style.display = "block";
        ventana.style.display = "block";
    }
    
document.getElementById("nombreId").value="";
document.getElementById("nacionalidadId").value="";
}   

//Funcion para agregar usuario a la base de datos
function agregarUsuario() {
    overlay.style.display = "none";
    ventana.style.display = "none";

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
var nombre = document.getElementById("nombreId").value;
var nacionalidad = document.getElementById("nacionalidadId").value;
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        getAjax();
    }
}
xhr.open("GET", "process.php?nombre=" + nombre + "&nacionalidad=" + nacionalidad);
xhr.send();
}   
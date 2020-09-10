var result = document.getElementById("info");

function getAjax() {
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

function editarUsuarios(usuarioId) {
    //Los nombres tienen que ser inequivocos al archivo Process.php
    var nombreId = "nombreId" + usuarioId;
    var nacionalidadId = "nacionalidadId" + usuarioId;
    var eliminar = "eliminar" + usuarioId;
    var actualizar = "actualizar" + usuarioId;
    var editarNombreId = nombreId + "-editar";

    var nombreDeUsuario = document.getElementById(nombreId).innerHTML;

    var parent = document.querySelector("#" + nombreId);

    if (parent.querySelector("#"+ editarNombreId) === null) {
       document.getElementById(nombreId).innerHTML = '<input type="text" id = "'+editarNombreId+'" value ="'+nombreDeUsuario+'">';
       document.getElementById(eliminar).disabled="true";
       document.getElementById(actualizar).style.display="block";
    }
}

function actualizarUsuario(usuarioId) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var nombreActualizado = document.getElementById("nombreId" + usuarioId + "-editar").value;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            getAjax();
        }
    }
    xhr.open("GET", "process.php?usuarioIdActualizado=" + usuarioId + "&nombreActualizado=" + nombreActualizado, true);
    xhr.send();
}

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
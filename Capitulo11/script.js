var result = document.getElementById("info");
function getAjax(usuarioElegido) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr=new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (usuarioElegido === "") {
        result.innerHTML="";
    } else {
        xhr.onreadystatechange = function () {
            if (xhr.readyState==4 && xhr.status==200) {
                result.innerHTML=xhr.responseText;
            }
        }
        xhr.open("GET", "process.php?usuario="+usuarioElegido, true);
        xhr.send();
    }
}
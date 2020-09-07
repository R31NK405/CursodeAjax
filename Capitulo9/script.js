var result = document.getElementById("info");
function getAjax(usuario) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (usuario.length === 0) {
        document.getElementById("info").innerHTML=" ";
    }else{
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                result.innerHTML=xhr.responseText;
            }
        }
        xhr.open("GET", "process.php?nombre="+usuario, true);
        xhr.send();
    }
}
var result = document.getElementById("info");
function getAjax(nombre) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr=new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (nombre === "") {
        result.innerHTML="";
    } else {
        xhr.onreadystatechange = function () {
            if (xhr.readyState==4 && xhr.status==200) {
                result.innerHTML=xhr.responseText;
            }
        }
        xhr.open("GET", "process.php?nombre="+nombre, true);
        xhr.send();
    }
}
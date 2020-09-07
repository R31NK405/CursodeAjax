var result = document.getElementById("info");
function getAjax() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    //cadena para ser posteriormente anidada a la URL
    var informacionUsuario = "num1="+a+"&num2="+b;

    xhr.onreadystatechange = function () {
            if (xhr.readyState==4 && xhr.status==200) {
                result.innerHTML=xhr.responseText;
            }
    }
    xhr.open("get","process.php?" + informacionUsuario, true);//Metodo GET
    //Metodo POST
    //xhr.open("post","process.php", true);
    //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(informacionUsuario);
}
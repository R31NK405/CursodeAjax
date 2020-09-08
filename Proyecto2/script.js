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
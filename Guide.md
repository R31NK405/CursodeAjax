Declaracion estandar
var xhr = new XMLHttpRequest();->declaracion
xhr.open("POST", "formulario.php", true);->Informacion basica del Request
xhr.send();->enviar datos al server

Declaracion para formularios
var xhr = new XMLHttpRequest();->declaracion
xhr.open("POST", "formulario.php", true);->Informacion basica del Request
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");->Request para trabajar con formularios
xhr.send("nombre=walter&apellido=gutierrez");->enviar datos al server

Propiedades y estados
readyState: La propiedad Document.readyState de un document describe el estado de carga del documento.
if (xmlhttp.readyState==4) indica que se ha recibido la información solicitada del servidor.

Puede tomar los siguientes valores:

0: no inicializado. Indica que no se ha abierto la conexión con el servidor (no se ha llamado a open)

1: conexión con servidor establecida. Indica que se ha abierto la conexión pero todavía no se ha enviado la petición (no se ha llamado a send)

2: recibida petición en servidor. Indica que el servidor ya ha recibido la petición (se ha llamado a send)

3: enviando información. Se está enviando la información por parte del servidor, todavía no se ha completado la recepción.

4: completado. Se ha recibido la información del servidor y está lista para operar con ella.

onReadyStateChange: Sirve para definir una función que será llamada automáticamente cada vez que cambie la propiedad readyState del objeto.
responseText: Una vez completada la comunicación, responseText contiene la respuesta del servidor en forma de cadena de texto
responseXML: Una vez completada la comunicación, responseText contiene la respuesta del servidor en formato XML
status: Código numérico entero enviado por el servidor que indica el tipo de respuesta dada a la petición. Puede tomar valores como:

200: respuesta correcta.

404: no encontrado.

500: error interno del servidor.
var xhr = new XMLHttpRequest();
xhr.open("post", "crearusuario.php" true);
xhr.onReadyStateChange=function () {
    if (xhr.readyState==4 && xhr.status==200) {
        var divUsuario=document.getElementById('registro');
        divUsuario.innerHTML=xhr.responseText;
    }
}
xhr.send();

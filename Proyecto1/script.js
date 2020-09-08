function mostrarUsuario(){
    /*usuario, el parametro del input*/
    var resultado=document.getElementById("info");
    var xhr;
    /*Para navegadores modernos*/
    if(window.XMLHttpRequest){
     xhr=new XMLHttpRequest();
    }else{/*Para nagevadores antiguos*/
     xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    /*Para procesar la informacion del servidor*/
    xhr.onreadystatechange=function(){
     /*Si ya finalizo y es exitosa haga esto*/
     if(xhr.readyState==4&&xhr.status==200){
      var datos=xhr.responseText;
      /*innerHTML, significa escribir dentro del div*/
      resultado.innerHTML=datos;
     }
    }
    xhr.open("GET","process.php",true);
    xhr.send();/*Es para enviar nuestra petición*/
    /*La variable nombre va a almacenar el nombre que digito el usuario*/
   }
   function buscarUsuario(nombre){
    /*usuario, el parametro del input*/
    var resultado=document.getElementById("info");
    var xhr;
    if(window.XMLHttpRequest){/*Para navegadores modernos*/
     xhr=new XMLHttpRequest();
    }else{/*Para nagevadores antiguos*/
     xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(nombre==""){/*Si esta vacio, que muestre un mensaje en blanco, 
     es decir que el usuario no ingreso ningun nombre*/
     resultado.innerHTML="";/*Aqui muestra un mensaje en blanco*/
    }
    /*Para procesar la informacion del servidor*/
    xhr.onreadystatechange=function(){
     /*Si ya finalizo y es exitosa haga esto*/
     if(xhr.readyState==4&&xhr.status==200){
      var datos=xhr.responseText;
      /*innerHTML, significa escribir dentro del div*/
      resultado.innerHTML=datos;
     }
    }
    xhr.open("GET","process.php?nombre="+nombre,true);
    xhr.send();/*Es para enviar nuestra petición*/
    /*La variable nombre va a almacenar el nombre que digito el usuario*/
   }
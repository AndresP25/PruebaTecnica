function controlEspacio() {
    var evento_key = window.event.keyCode;
    if (evento_key == 32 ) //comparo tecla space
    
    alert('Error, no puede usar un espacio en este lugar')
}

function delayRedirect(){
    var count = 2;
    setInterval(function(){
        count--;
        if (count == 0) {
          location.href='/src/html/SelectorProyectos.html'; 
        }
    },1000);
}

function RegExitoso(){  
    alert("Creando Usuario. Espere un momento"); 
    delayRedirect();
}

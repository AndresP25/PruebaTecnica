function delayRedirect(){
    var count = 2;
    setInterval(function(){
        count--;
        if (count == 0) {
          location.href='/src/html/Main.html';
        }
    },1000);
}

function RegExitoso(){  
    alert("Uniendo a Proyecto"); 
    delayRedirect();
}

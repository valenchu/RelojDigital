setInterval(()=>{
    var reloj = document.getElementsByClassName("reloj")[0];
    var tiempoActual = new Date();
    var hora = tiempoActual.getHours();
    if(hora < 10){hora = `0${hora}`}
    var min = tiempoActual.getMinutes();
    if(min < 10){min = `0${min}`}
    var seg = tiempoActual.getSeconds();
    if(seg < 10){seg = `0${seg}`}
    reloj.innerHTML = `${hora}:${min}:${seg}`; 
}, 1000)
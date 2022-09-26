/* Navegador */
function ir_a_inicio(){
    alert('vuelvo al index')
    window.location.href='index.html' 
}
function menu(){
    window.location.href='menu.html' 
}

function napolitana(){
    window.location.href='napolitana.html' 
}

function alla_pala(){
    window.location.href='alla_pala.html' 
}

function tonda_romana(){
    window.location.href='tonda_romana.html' 
}

function siciliano(){
    window.location.href='siciliano.html' 
}

function al_padellino(){
    window.location.href='al_padellino.html' 
}
function fritta(){
    window.location.href='fritta.html' 
}


/* Modo Oscuro */
// cambiar estilo
function darkMode() {  
    var element = document.body;
    element.classList.toggle("dark-mode");
    cambiarIcono();
}

// cambiar iconos
var fotoMostrada = "sol";
function cambiarIcono(){
    var icono = document.getElementById("modo");
    if (fotoMostrada == "sol"){
        icono.src="icon/luna.png";
        fotoMostrada = "luna";
    }
    else{
        icono.src="icon/sol.png";
        fotoMostrada = "sol";
    }     
}


var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(34, 143, 25)";
var butDow = document.getElementById("butDow");
butDow.addEventListener('click', moverBarra);

const LIMITE_CARGA = 450;

var rect = {
    posX: 150,
    posY: 300,
    ancho: 10,
    alto: 30
}

var interval = null;

function moverBarra(){
    if(interval === null){
        interval = setInterval(function(){

            if(estaEnElLimite()){
                alert("Tarea completada");
                clearInterval(interval);
                interval = null;
            }

            rect.posX += 0.5;
            rect.ancho += 10;
            limpiarTablero();
            pintarRectangulo(rect); 
            //pintarImagenDeFondo();
        }, 10)
    }
    else{
        clearInterval(interval);
        interval = null;
    }
}

function estaEnElLimite(){
    return rect.posX >= LIMITE_CARGA;
}
function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}
function pintarRectangulo({ posX, posY, ancho, alto}){
    ctx.fillRect(posX, posY, ancho, alto);
}
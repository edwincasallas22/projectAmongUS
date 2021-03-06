var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
const gif = document.getElementById("gif");

ctx.fillStyle = "rgb(34, 143, 25)";
var butDow = document.getElementById("butDow");
butDow.addEventListener("click", () => {
    gif.src = "https://media.giphy.com/media/tJrjQ5HzlOStHInsmw/giphy.gif";
});

// var carga = document.getElementById("carga");
butDow.addEventListener("click", moverBarra);

var imagenBarra = new Image();
imagenBarra.src = "./barraM.PNG";

const LIMITE_CARGA = 355;

var rect = {
    posX: 85,
    posY: 240,
    ancho: 10,
    alto: 30,

    // posX: 100,
    // posY: 300,
    // ancho: 10,
    // alto: 30
};

pintarImagenDeFondo();

var interval = null;

function moverBarra() {
    if (interval === null) {
        interval = setInterval(function () {
            if (estaEnElLimite()) {
                alert("Tarea completada");
                gif.src = "./pantallazo.png";
                clearInterval(interval);
                interval = null;
            }

            rect.ancho += 7;
            limpiarTablero();
            pintarRectangulo(rect);
            pintarImagenDeFondo();
        }, 100);
    } else {
        clearInterval(interval);
        interval = null;
    }
}

function estaEnElLimite() {

    return rect.ancho >= LIMITE_CARGA;
}
function limpiarTablero() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function pintarRectangulo({ posX, posY, ancho, alto }) {
    ctx.fillRect(posX, posY, ancho, alto);
}
function pintarImagenDeFondo() {
    ctx.drawImage(imagenBarra, 0, 0, canvas.width, canvas.height);
}

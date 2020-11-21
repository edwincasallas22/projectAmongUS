var botUno= document.getElementById("uno");
var botDos= document.getElementById("dos");
var botTres= document.getElementById("tres");
var botCuatro= document.getElementById("cuatro");
var botCinco= document.getElementById("cinco");
var botSeis= document.getElementById("seis");
var botSiete= document.getElementById("siete");
var botOcho= document.getElementById("ocho");
var botNueve= document.getElementById("nueve");
var botDiez= document.getElementById("diez");

var global = 1; 
var uno = false;
var dos = false;
var tres = false;
var cuatro = false;
var cinco = false;
var seis = false;
var siete = false;
var ocho = false;
var nueve = false;
var diez = false;

botUno.addEventListener('click', cambiarColorUno);
botDos.addEventListener('click', cambiarColorDos);
botTres.addEventListener('click', cambiarColorTres);
botCuatro.addEventListener('click', cambiarColorCuatro);
botCinco.addEventListener('click', cambiarColorCinco);
botSeis.addEventListener('click', cambiarColorSeis);
botSiete.addEventListener('click', cambiarColorSiete);
botOcho.addEventListener('click', cambiarColorOcho);
botNueve.addEventListener('click', cambiarColorNueve);
botDiez.addEventListener('click', cambiarColorDiez);



function reinicio(){
    botUno.style.backgroundColor = "white";
    botDos.style.backgroundColor = "white";
    botTres.style.backgroundColor = "white";
    botCuatro.style.backgroundColor = "white";
    botCinco.style.backgroundColor = "white";
    botSeis.style.backgroundColor = "white";
    botSiete.style.backgroundColor = "white";
    botOcho.style.backgroundColor = "white";
    botNueve.style.backgroundColor = "white";
    botDiez.style.backgroundColor = "white";
}

function cambiarColorUno(){
   
    if(botUno.value == global)
    {
        botUno.style.backgroundColor = "green";
        uno = true;
        global ++;
        console.log(global);
    }
    // else{
    // //     global = 0;
    // //     botUno.style.backgroundColor = "red";
    // //     uno = false;
    // //     console.log(global);
    // // }

}
function cambiarColorDos(){
    if(botDos.value == global)
    {
        botDos.style.backgroundColor = "green";
        dos = true;
        global ++;
        console.log(global);
    }
    else{
        botDos.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();

        }, 400);
          
    }
}
function cambiarColorTres(){
    if(botTres.value == global)
    {
        botTres.style.backgroundColor = "green";
        tres = true;
        global ++;
        console.log(global);
    }
    else{
        botTres.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();
        }, 400);
          
    }

}
function cambiarColorCuatro(){
    if(botCuatro.value == global)
    {
        botCuatro.style.backgroundColor = "green";
        cuatro = true;
        global ++;
        console.log(global);
    }
    else{
        botCuatro.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();
        }, 400);      

    }

}

function cambiarColorCinco(){
    if(botCinco.value == global)
    {
        botCinco.style.backgroundColor = "green";
        cinco = true;
        global ++;
        console.log(global);
    }
    else{
        botCinco.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();
        }, 400);      

    }

}
function cambiarColorSeis(){
    if(botSeis.value == global)
    {
        botSeis.style.backgroundColor = "green";
        seis = true;
        global ++;
        console.log(global);
    }
    else{
        botSeis.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();
        }, 400);      

    }

}
function cambiarColorSiete(){
    if(botSiete.value == global)
    {
        botSiete.style.backgroundColor = "green";
        siete = true;
        global ++;
        console.log(global);
    }
    else{
        botSiete.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();
        }, 400);      

    }

}
function cambiarColorOcho(){
    if(botOcho.value == global)
    {
        botOcho.style.backgroundColor = "green";
        ocho = true;
        global ++;
        console.log(global);
    }
    else{
        botOcho.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();
        }, 400);      

    }

}
function cambiarColorNueve(){
    if(botNueve.value == global)
    {
        botNueve.style.backgroundColor = "green";
        nueve = true;
        global ++;
        console.log(global);
    }
    else{
        botNueve.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();
        }, 400);      

    }

}
function cambiarColorDiez(){
    if(botDiez.value == global)
    {
        botDiez.style.backgroundColor = "green";
        console.log(global);
        diez = true;
    }
    else{
        botDiez.style.backgroundColor = "red"
        setTimeout(() =>{
            global = 1;
            reinicio();
        }, 400);      

    }
    

}


    
    if(diez == true){
        alert("Task Completed!");
        console.log("termino");
    }

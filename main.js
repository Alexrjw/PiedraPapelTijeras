
let seleccionado;   /* Se guarda la seleccion del usuario */

let piedra = document.getElementById("piedra");         /* 1 */
let papel = document.getElementById("papel");           /* 2 */
let tijeras = document.getElementById("tijeras");       /* 3 */

let ventana = document.getElementById("ventana");       /* Seleccionamos ventana */
let mensaje = document.querySelector(".mensaje");       /* Seleccionamos el mensaje */

let maquina = document.querySelector(".maquina");       /* Seleccionamos la maquina */


/* Aqui asignamos una variable a cada hijo de maquina para poder trabajar con cada una de ellas */
let hijo1 = maquina.children[0]; 
let hijo2 = maquina.children[1]; 
let hijo3 = maquina.children[2]; 

/* Variables para el iterar */
let contador = 1;
let contador2 = 0;
let tiempo1, tiempo2;

/* Aqui quitamos el mesaje que aparecio empezando de nuevo  al recargar la pagina*/

ventana.addEventListener("click", ()=>{
    location.reload();
})

/* Le damos un evento click a cada una de la opciones para lanzar el mensaje y comparar el resultado */
piedra.addEventListener("click", ()=>{
    seleccionado = 1;
    azar();
    piedra.classList.add("selccionado");
    ventana.classList.remove("display");

    limpiar();
});
papel.addEventListener("click", ()=>{
    seleccionado = 2;
    azar();
    papel.classList.add("selccionado");
    ventana.classList.remove("display");
    
    limpiar();
});
tijeras.addEventListener("click", ()=>{
    seleccionado = 3;
    azar();
    tijeras.classList.add("selccionado");
    ventana.classList.remove("display");
    
    limpiar();
});




/* Con la funcion tiempo() hacemos que esta funcion vaya animando que aparezcan los hijo de mensaje */
function aparecer(){
    let hijoAparece = maquina.children[contador]; 
    hijoAparece.classList.remove("oculto");
    contador++;
    if(contador==3 ){
        contador = 0;
    }
}


/* Con la funcion tiempo() hacemos que esta funcion vaya animando que desaparezcan los hijo de mensaje con retraso ya que asi se podra ver que aparecen y desaparecen*/
function desaparecer(){
    let hijoAparece = maquina.children[contador2]; 
    hijoAparece.classList.add("oculto");
    contador2++;
    if(contador2==3 ){
        contador2 = 0;
    }
}
/* Esta funcion hace que cadad cierto tiempo aparezcan o desaparezcan los hijos de mensaje */
function tiempo(){
    tiempo1 = window.setInterval(aparecer, 100);
    tiempo2 = window.setInterval(desaparecer, 100);
} 
/* Limpia la funcion tiempo() asi cuando aparezca el mensaje no siga iterando los hijos de mensaje*/
function limpiar(){
 clearInterval(tiempo1);
 clearInterval(tiempo2);
}

/* Elige un numero al azar del 1 al 3 y compara el resultado con el numero elegido por el usuario y saber si es ganador o no, luego compara 
el numero elegido para dejar a la vista lo que eligio la maquina y poder visualizar que no se hixo trampa*/
function azar() {
    
    let numAleatorio = Math.round(Math.random() * 2) + 1;

    if ( seleccionado == 1){
        if (numAleatorio == 2){
            mensaje.innerHTML = "¡¡¡  HAS PERDIDO  !!! <br>  El papel aplasta la piedra";
        }
        if (numAleatorio == 3){
            console.log ("piedra vs tijeras")
            mensaje.innerHTML = "¡¡¡  HAS GANADO  !!!  <br>  La piedra aplasta a las tijeras";
        }
    }

    if ( seleccionado == 2){
        if (numAleatorio == 3){
            console.log ("papel vs tijeras")
            mensaje.innerHTML = "¡¡¡  HAS PERDIDO  !!! <br>  Las tijeras cortan al papel";
        }
        if (numAleatorio == 1){
            console.log ("papel vs piedra")
            mensaje.innerHTML = "¡¡¡  HAS GANADO  !!! <br>  El papel aplasta la piedra";
        }
    }

    if ( seleccionado == 3){
        if (numAleatorio == 1){
            console.log ("tijeras vs piedra");
            mensaje.innerHTML = "¡¡¡  HAS PERDIDO  !!! <br>  La piedra aplasta a las tijeras";
        }
        if (numAleatorio == 2){
            console.log ("tijeras vs papel")
            mensaje.innerHTML = "¡¡¡  HAS GANADO  !!! <br>  Las tijeras cortan al papel";
            
        }
    }
    if(numAleatorio == seleccionado){
        mensaje.innerHTML = "¡¡¡  EMPATE  !!!";
        console.log("¡¡ EMPATE !!")
    }

    if (numAleatorio == 1) {
        hijo1.classList.remove("oculto");
        hijo2.classList.add("oculto");
        hijo3.classList.add("oculto");
    }else if(numAleatorio ==2){
        hijo2.classList.add("oculto");
        hijo2.classList.remove("oculto");
        hijo3.classList.add("oculto");
    }else if(numAleatorio ==3){
        hijo1.classList.add("oculto");
        hijo2.classList.add("oculto");
        hijo3.classList.remove("oculto");
    }
    
}
tiempo(); 
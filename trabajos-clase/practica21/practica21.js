'use strict'

function multiplo(multiplicador, multiplicando){
    let contador = Number(0)
    for(let i=0; i < multiplicador; i++){
        contador = contador + multiplicando;
    }

    return contador;
       
}

let primerNumero = Number(prompt("Ingresa un número"));
let segundoNumero = Number(prompt("¿Cuantas veces quieres multiplicar el número?"));

let resultado = multiplo(primerNumero, segundoNumero)
alert(resultado)

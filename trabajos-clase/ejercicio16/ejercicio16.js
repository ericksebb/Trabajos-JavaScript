'use strict'

let contador = 0
let total = 5

function eldiablo(){
    contador = contador +1
    alert("vuelta n. " + contador)
}

while(contador < total){
    eldiablo()
}
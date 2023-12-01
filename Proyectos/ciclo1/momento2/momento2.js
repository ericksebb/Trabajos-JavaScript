'use strict'

function Player(nombre, vidas, carta) {
    this.nombre = nombre;
    this.vidas = vidas;
    this.carta = carta;
}

let player1 = new Player(prompt("Escribe tu nombre de usuario (deja en blanco para ser anónimo)"), 3, 10);
    
if(player1.nombre == ( null || "")){
    player1.nombre = "anonymous";
}

let labelP1 = document.getElementById("nick-player-1");
labelP1.innerHTML = `Player 1: ${player1.nombre}`
let livesP1 = document.getElementById("lives-player-1")
livesP1.innerHTML = `Vidas restantes: ${player1.vidas}`

let player2 = new Player("IA", 3, 5)
let labelP2 = document.getElementById("nick-player-2")
labelP2.innerHTML = `Player 2: ${player2.nombre}`
let livesP2 = document.getElementById("lives-player-2")
livesP2.innerHTML = `Vidas restantes: ${player2.vidas}`
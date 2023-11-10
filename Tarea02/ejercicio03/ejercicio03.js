'use strict'
/*
Enunciado:
    Se solicita el desarrollo de una aplicación que permita a los usuarios establecer un apodo utilizando un prompt. 
    En caso de que el usuario no elija un apodo, se asignará automáticamente el valor predeterminado "anonymus". 
    Una vez finalizado, se mostrará el apodo ingresado o el valor predeterminado en un alert.
*/

let nickname;
    nickname = prompt("¿Cuál es tu nombre de usuario?");


//  Al realizar un prompt pero sin embargo este no es llenado, 
//  no se utilizará undefined ni null porque un espacio vacío es una respuesta válida.
//  Así que con el comando de abajo definirá el espacio vacío como undefined.

if(nickname==""){
    nickname = undefined;
}

alert("Tu nickname es: " + (nickname ?? "anonymous"));
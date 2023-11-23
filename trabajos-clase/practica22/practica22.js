'use strict'

//  Datpos primitivos


//  Datos hombres

let user = {
    firstName: prompt("¿Cuál es tu nombre?"),
    age: Number(prompt("¿Qué edad tienes?")),
    isStudent: prompt("¿Eres estudiante?"),
    hobby: prompt("¿Qué haces en tus tiempos libres?"),
    address: prompt("¿En dónde vives?")
    
};

alert("Mi nombre es " + user.firstName+ " " + user.age +" "+ "Student: " + user.isStudent)

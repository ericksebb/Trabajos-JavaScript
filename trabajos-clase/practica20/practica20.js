'use strict'

function printAge(currentYear=Number(2023)){
    birthYear = Number(prompt("¿Cuál es tu año de nacimiento?"));
    let age = (currentYear - birthYear);
    alert ("Tu edad es " + age);
}

printAge()

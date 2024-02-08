'use strict'
/*
Enunciado: 
    Una empresa está en búsqueda de un conductor y ha establecido dos requisitos fundamentales:
    El candidato debe tener 25 años o más, además de poseer una licencia profesional.
    Tu tarea es crear un programa que almacene estos dos datos en dos variables
    (una de tipo number y la otra boolean) y validarlos usando una sentencia if. 
    Si el candidato cumple con ambos requisitos, mostrará el mensaje "Apto", y si no, mostrará "No apto".
*/

let age = Number(prompt("Ingresa tu edad"));
let licence = prompt("¿Tienes licencia de conducir profesional?");

if(licence == "Si" || licence == "si" || licence == "SI"){
    licence = Boolean(true);
}

// aquí si usaba simplemente "else", el valor license siempre daba falso
else if(licence == "no" || licence == "No" || licence == "NO"){;
    licence = Boolean(false)
}

if((age >= 25) && (licence == Boolean(true))){     
    alert("Apto para el trabajo");
}
else{
    alert("No apto para el trabajo");
}

//  alert(licence)
//  con esto solo quería probar si la licencia daba un valor booleano, intenté una hora y no sé qué salía mal.
//  Edit: Estaba utilizando comas y no las funciones or para separar 🗿
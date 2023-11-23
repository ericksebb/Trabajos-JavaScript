'use strict'

/*
Enunciado:
Crear la función denominada "validarTaxi" que reciba un objeto literal con varios atributos, incluido el año de fabricación.
Luego, calcular la vida útil del taxi y, si es menor a 10 años, devolver true; de lo contrario, devolver false.

*/

function validarTaxi(currentYear = 2023) {

    let taxi = {
        make: prompt("¿Qué marca es tu vehículo?"),
        model: prompt("¿Qué modelo es tu vehículo?"),
        color: "Amarillo",
        year: Number(prompt("¿Qué año de fabricación es tu vehículo?")),
        valve: prompt("Cuántas válvulas tiene tu vehículo? (responder V6, V8, etc.)")
    }

    if((currentYear-taxi.year) < 10){
        alert(Boolean(true))
        return Boolean(true)

    }
    else{
        alert(Boolean(false))
        return Boolean(false)
    }
}

validarTaxi()
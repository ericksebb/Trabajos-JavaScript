'use strict'

function validarTaxi() {
    let antiguedad = (currentYear - year)
       
        if (antiguedad < 10) {
            alert("Válido")
        }
        else{
            alert("No válido")
        }
}

let vehicle = {
    make: "Toyota",
    model: "Stout II",
    color: "White",
    licencePlate: "AUG-0588"
}
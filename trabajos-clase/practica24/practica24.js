'use strict'

/*
let nombre = "juandie";
let apodo = nombre;

alert(nombre);
alert(apodo);

let person = {
    firstName: "Juan",

}

let otherPerson = person;
alert (person.firstName)
alert (otherPerson.firstName)
*/

function Vehiculo (placa) {
    this.placa = placa;
}

let vehiculo= new Vehiculo("ABC-1234")
alert(vehiculo.placa);

let persona = {};
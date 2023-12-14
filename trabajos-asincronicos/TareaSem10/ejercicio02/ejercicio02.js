'use strict'

/*
Enunciado: 
Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde 
el formato de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.
*/

let code = "01.24";

let floorPosition = code.indexOf("0");
let officePosition = code.indexOf(".");
let floor = code.substring(floorPosition, officePosition)
let office = code.substring(officePosition +1, code.length +1)

alert(floorPosition)
alert(officePosition)
alert(floor)
alert(office)
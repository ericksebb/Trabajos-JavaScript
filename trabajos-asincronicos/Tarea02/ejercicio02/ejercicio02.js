'use strict'

/*
Enunciado:
    El Instituto Sudamericano ha definido los criterios para otorgar las Becas Estudiantiles, 
    especificando que el estudiante debe mantener un promedio igual o superior a 8.5 
    y que los ingresos mensuales familiares no superen los 600 dólares. 
    Se requiere un programa que verifique estas condiciones ingresando la información 
    correspondiente y muestre un mensaje de "Aprobado" o "Desaprobado".
*/

let promedio = Number(prompt("Ingrese su promedio, siendo 0 el mínimo y 10 el máximo, puedes utilizar decimales"))
let ingresos = Number(prompt("¿Cuáles son sus ingresos mensuales?"))

if(promedio >= 8.5 && ingresos <= 600){
    alert("Aprobado");
}
else{
    alert("Desaprobado")
}
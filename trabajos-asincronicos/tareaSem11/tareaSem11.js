/*
Enunciado: 

Partiendo del siguiente array, realizar las operaciones necesario para ordenar los días de la semana:

let week = ['Suday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 

Eliminar el día domingo del inicio de la lista.
Agregar el día lunes al inicio de la lista.
Agregar el día domingo al final de la lista.
Insertar el día viernes en la posición correspondiente.
Mostrar en pantalla de elemento en elemento usando un for.
Usar los métodos: push, pop, shift, unshift, splice



Subir el ejercicio a un repositorio y pegar el link.
*/
'use strict'

let week = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 

alert(week);

week.shift();
week.unshift("Monday");
week.push("Sunday");
week.splice(4,0, "Friday");

for(let i=0; i<week.length; i++){
    alert(week[i])
}
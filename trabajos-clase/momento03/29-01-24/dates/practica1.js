'use strict'

let dates = ["2019-07", "1999-10", "2013-03", "1997-11"];
// Seleccionar las fechas luego del 2000

;
let newDates = dates.filter((date) => date.slice(0, 4) > 2000);
console.log(dates.filter((date) => date.slice(0, 4) > 2000))
// almacenar en variables independientes el resultado anterior

let date1 = newDates[0];
let date2 = newDates[1];
console.log(date2)
// Obtener el mes de de cada variable

let month1 = Number(date1.slice(indexOf("-"), length(date1)));
let month2 = Number(date2.slice(indexOf("-"), length(date2)));
/*  */
// Mostrar en que semestre se encuentra cada mes

compareMonth(month1);{
    if (month1 => 6){
        alert("El mes " + month1 + " pertenece al segundo semestre");
    }
    else {
        alert("El mes " + month1 + " pertenece al primer semestre")
    }
};

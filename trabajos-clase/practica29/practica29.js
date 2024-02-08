'use strict'

let students = ["Aguilera", "Argudo", "Bermello", "Caballero", "Calle", "Calle", "Carriel", "Correa", "Criollo", "Cuesta", "Encalada", "Gutierrez"]

for(let n=0; n<students.length; n++){
    alert (`${n+1} ${students[n]}`);
}

students.push("Prado")

for(let n=0; n<students.length; n++){
    alert (`${n+1} ${students[n]}`);
}

students.pop()

for(let n=0; n<students.length; n++){
    alert (`${n+1} ${students[n]}`);
}

students.splice(1,1)

for(let n=0; n<students.length; n++){
    alert (`${n+1} ${students[n]}`);
}
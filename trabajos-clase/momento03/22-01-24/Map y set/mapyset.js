'use strict'

//MAP
let john = { name: "John" };

// para cada usuario, almacenemos el recuento de visitas
let visitsCountMap = new Map();

// john es la clave para el Map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123

//Map sirve para poder ocupar cualquier simbolo, numero o valor como clave 


//SET

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visitas, algunos usuarios lo hacen varias veces
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set solo guarda valores únicos
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (luego Pete y Mary)
}

//Set sirve para hacer una coleccion de valores unicos no duplicados
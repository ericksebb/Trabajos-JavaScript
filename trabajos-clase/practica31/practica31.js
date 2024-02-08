'use strict'

let edades = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let pedazo = edades.slice(3, 7);
// alert(`slice: ${pedazo}`);

let nuevasEdades = edades.concat([22, 24]);

alert(`concat: ${nuevasEdades}`);
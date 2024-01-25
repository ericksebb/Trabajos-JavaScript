'use strict'

//Object.keys, values, entries

let user = {
    name: "John",
    age: 30
  };
  Object.keys(user) = ["name", "age"] //devuelve un array de propiedades
  Object.values(user) = ["John", 30]  //devuelve un array de valores
  Object.entries(user) = [ ["name","John"], ["age",30] ] //devuelve un array de pares(propiedades-valores)
  
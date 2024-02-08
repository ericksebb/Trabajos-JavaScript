'use strict'

//Métodos JSON, toJSON

let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  alert(user); // {name: "John", age: 30}

  //Convierte el objeto en un string
'use strict'

class Estudiante {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    sayHi(){
        alert(this.name + " dice hola");
    }
};

let estudiante1 = new Estudiante("Juan", 20, "Informatica");
estudiante1.sayHi();
'use strict'

function Product(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
}

let tool1 = new Product("Taladro Stanley", "Taladro percutor Stanley 6000RPM 120V~ 10A", "$80 varos");
    alert(tool1.name);
    alert(tool1.description);
    alert(tool1.price);
// let papaFrita= new Products("")
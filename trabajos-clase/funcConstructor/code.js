'use strict'

function Product(description, overview, price){
    this.description = description;
    this.overview = overview;
    this.price = price;
}

let product1 = new Product(
    "Taladro Stanley",
    "Taladro percutor marca Stanley de 600w y 3000RPM",
    Number(20)
)

let product2 = new Product(
    "Koenigsegg Jesko",
    "Auto hiperdeportivo Koenigsegg Jesko V12 2.4L",
    "2'002.203,00"
)

alert(product1.overview)
alert(product2.overview)
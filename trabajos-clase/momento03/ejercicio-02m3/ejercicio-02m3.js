/* 'use strict'

let fruits = ["apple", "banana", "lemon", "orange", "grapes"];
let [sweetFruit, sourFruit, ...moreFruits] = fruits;
alert(sweetFruit);
alert(sourFruit);
alert(moreFruits);

let newFruits = ["peach", "melon", "watermelon"];

let evenNewerFruits = [fruits, newFruits];
console.log(evenNewerFruits)
 */
// sweetFruit
// sourFruit
// moreFruits

let request = "GET /index.html HTTP/1.1";
let [method, resource, protocol] = request.split(" ");
alert(request.split(" "))
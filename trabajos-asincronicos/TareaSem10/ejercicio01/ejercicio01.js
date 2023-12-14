'use strict'

let plate = "ABC-1234"

let letterPosition = plate.indexOf("A")
let numPosition = plate.indexOf("-")
let letters = plate.substring(0, numPosition)
let num =  plate.substring(numPosition+1, plate.length+1)

alert(num);
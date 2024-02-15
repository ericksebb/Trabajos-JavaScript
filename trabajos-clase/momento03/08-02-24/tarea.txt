'use strict'

class Fridge {
  constructor() {
    this.items = []
    this.brand = brand
    
    this.space = space
    this.temperature = 0
    this.color = color
  }

  addMeal(item) {
    this.items.push(item)
  }

  removeItem(item) {
    this.items = this.items.filter(i => i !== item)
  }

  getItems() {
    alert(`La refrigeradora contiene ${this.items.join(', ')}`)
  }
}

let myFridge = new Fridge()
myFridge.addMeal('banana')
myFridge.addMeal('apple')
myFridge.addMeal('meat')
myFridge.getItems()
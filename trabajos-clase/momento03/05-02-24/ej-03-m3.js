'use strict'

// User con utilidades para login, resetear contraseña, actualizar información y mostrar información 
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    login(username, password){
        if(username===this.username && password===this.password){
            alert("Login successful")
        }        
        else{
            alert("The username or password are incorrect. Please try again.")
        }
    }
    resetPassword(){
        let newPassword = prompt("Please enter your new password");
        this.password = newPassword;
        alert(`your new password is: ${this.password}`)
    }

    updateInfo(){
        let newUsername = prompt("Please enter your new username, leave empty if you don't want to change it.");
        let newEmail = prompt("Please enter your new email, leave empty if you don't want to change it.");
        if(newUsername !== ""){
            this.username = newUsername;
        }
        if(newEmail !== ""){
            this.email = newEmail;
        }
        alert(`Your new username is: ${this.username}, and your new email is: ${this.email}`)
    }

    showInfo(){
        alert(`Username: ${this.username}, Email: ${this.email}, Password: ${this.password}`)
    }
}

let user1 = new User("ericsebb", "ericsebb@duck.com", "Hola mundo!");

user1.login("ericsebb", "Hola mundo!");
user1.resetPassword();
user1.updateInfo();
user1.showInfo(); 

// Product con utilidades para añadir stock, reducir stock, actualizar precio y mostrar información

class Product{
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    updatePrice(newPrice){
        this.price = newPrice;
        alert(`The price of ${this.name} has been updated to $${this.price}`)
    }
    addStock(quantity){
        this.stock += quantity;
        alert(`The stock of ${this.name} has been updated to ${this.stock}`)
    }
    reduceStock(quantity){ 
        if(quantity > this.stock){  // Al no existir un stock negativo, utilicé un if para evitar que el stock baje de 0

            alert("There's not enough stock to do that.") 
        } 
        else{
            this.stock -= quantity;
            alert(`The stock of ${this.name} has been updated to ${this.stock}`)
        }
    }
    showInfo(){
        alert(`Product: ${this.name}, Price: $${this.price}, Stock: ${this.stock}`)
    }
}

let product1 = new Product("HP Pavillion", 1000, 5);
product1.showInfo();
product1.addStock(10);
product1.reduceStock(3);
product1.updatePrice(1200);
product1.showInfo();
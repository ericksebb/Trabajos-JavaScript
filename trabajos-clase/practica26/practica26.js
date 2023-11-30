'use strict'


let person = {
    name: "juandie",
    age: 18,
    showName: function(){
        alert(this.name);
    },
    updateName: function(newName){
        this.name = newName
    }
}


person.showName()
person.updateName("Añañin")
person.showName()

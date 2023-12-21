/*
Enunciado: 
A a partir del array ages=[15, 50, 45] agregue su edad. Usando un for con un if, muestre en pantalla  solo las edades mayores a 25
*/

let ages = [15, 50, 45];
ages.splice(1, 0, 18);

// Los siguientes operadores sirven para colocar el número 45 en orden respectivo 
ages.pop();
ages.splice(2, 0, 45);


for(let i = 0; i < ages.length; i++){
    if(ages[i] > 25){
        alert(ages[i]);
    }
}
/* 
Enunciado: 
Crear una función constructora para crear un Estudiante con las siguientes propiedades:

- nombre, 
- correo
- promedio.
- Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
- na Función obtenerUsuario que devuelva únicamente el nombre de usuario del email
 
Crear un objeto a partir de la función anterior y comprobar funciones.
*/

'use strict'

function Estudiante(nombre, correo, promedio){
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarPromedio = function(){
       if (this.promedio >= 70){
           return ("Aprobado")
       } else {
           return ("Reprobado")
       } 
    }

    this.obtenerUsuario = function(){
        let domain = this.correo.indexOf("@");
        let username = this.correo.substring(0, domain);
        return (username); 
    }
}

let estudiante1 = new Estudiante(
    "Erick",
    "esprado@sudamericano.edu.ec",
    "80"
)

alert(estudiante1.validarPromedio())
alert(estudiante1.obtenerUsuario())
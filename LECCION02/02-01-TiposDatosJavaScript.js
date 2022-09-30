/* 
Ejemplo de tipos  de datos  en JavaScript
*/

//Tipo de dato string
var nombre = "ismael";
console.log(nombre);

//Reciclo de variable
nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(1000);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Morales",
    telefono : "1234567891"
}

console.log(typeof objeto);

//Tipo de dato Boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato Function
function miFuncion() { 
}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre, apellido) { 
        this.nombre = nombre;
        thia.apellido = apellido;
    }
    
}

console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);
x = undefined;
console.log(typeof x);

//null = Ausencia de valor
var y = null;
console.log(typeof y);


var autos = ['Tesla', 'Audi', 'Mazda'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);


/*Concatenacion de variables*/

var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + ' ' + "Lara";
console.log(nombreCompleto2);

var x = nombre + 219;
console.log(x);

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);


/*let y const*/
//Variables que les puedes cambiar el valor
let nombre1;
nombre1 = "Juan";
console.log(nombre);

//Variables que no se necesita modificar el valor
const apellido1 = "Perez";


//Buenas practicas nombres de variables
//Notacion altas y bajas
let nombreCompleto3 = "Juan perez";
console.log(nombreCompleto);

let x1, y1;
x1 = 10, y1 = 20;
let z1 = x1 + y1;
console.log(z1);



/*Reglas para definir nombres*/
let nombreCompleto5 = "Juan Perez";
let nombrecompleto = "Carlos Lara";

console.log(nombreCompleto5);
console.log(nombrecompleto);

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;

//let 1nombreCompleto;

let _break = 10;
let ruptura = 10;
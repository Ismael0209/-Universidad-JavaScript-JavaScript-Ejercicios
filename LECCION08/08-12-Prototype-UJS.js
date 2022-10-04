//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '1452369874';
console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
madre.tel = '668899008';
console.log( madre.tel );


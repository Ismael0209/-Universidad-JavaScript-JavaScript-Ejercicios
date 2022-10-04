let x = 10;

console.log(x.length);

let persona = {
    nombre: 'Julia',
    apellido : 'Perez',
    email: 'mail@mail.com', 
    edad: 28,
    nombreCompleto:function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.email);

console.log(persona.nombreCompleto());
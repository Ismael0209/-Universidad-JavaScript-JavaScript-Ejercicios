let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    get nombreCompleto(){ // get para obtener los valores sin parentesis 
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombreCompleto );
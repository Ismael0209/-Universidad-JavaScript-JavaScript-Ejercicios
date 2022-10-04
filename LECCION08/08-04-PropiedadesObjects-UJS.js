let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombre); //forma
console.log( persona['apellido'] ); // de forma string como corchetes y recorrer

//for in
for( nombrePropiedad in persona){ //definimos variable in osea en el objeto persona
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}
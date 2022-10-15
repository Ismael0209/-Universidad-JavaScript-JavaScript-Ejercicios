"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = "Juan";
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Jaimito");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());

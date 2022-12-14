import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";


@Injectable()
export class PersonaService {
    personas: Persona[] = [
        new Persona("Juan", "Perez"), 
        new Persona("Laura", "Juarez"),
        new Persona("Karla", "Lara")];

    saludar = new EventEmitter<number>();

    constructor(private loggingService:LoggingService,
                private dataServices: DataServices){}

    agregarPersona( persona:Persona ) {
        this.loggingService.enviarMensajeAConsola("Agregamos persona: " + persona.nombre);
        this.personas.push( persona );
        this.dataServices.guardarPersonas( this.personas );
    }

    encontrarPersona( index:number ) {
        let persona:Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona) {
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index:number) {
        this.personas.splice(index, 1);
    }
}
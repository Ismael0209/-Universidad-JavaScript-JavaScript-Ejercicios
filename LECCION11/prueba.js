class Persona{

    static contPersonas = 0;

    constructor(nombre, apellido,edad){
        this._idPersona = ++Persona.contPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;

    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
       this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
     }

     get edad (){
        return this._edad;
     }

     set edad(edad){
        this._edad = edad;
     }
     
     toString(){
       return this.idPersona + ' ' + this.nombre + ' ' + this.apellido 
     }
}

class Empleado extends Persona{
    static contEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }  
    
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}




let persona1 = new Persona('Ismael', 'Perez', 21);
console.log( persona1.toString());

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log( persona2.toString() );

let empleado1 = new Empleado('Zaira', 'Gomez', '25', 5000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Laura', 'Quintero', 33, 7000);
console.log( empleado2.toString() );

let cliente1 = new Cliente('Miguel', 'Cervantes', 30, new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente('Maria', 'Lara', 15, new Date());
console.log(cliente2.toString());
class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles())
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo gerente');
        console.log(tipo.departamento);
    }
    else if (tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo.departamento);
    }
    else if (tipo instanceof Object){
        console.log('Es un objeto de tipo Object')
    }
}

let empleado01 = new Empleado('Jaime', 500);


let gerente01 = new Gerente('CASIMIRO', 1000, 'TI');

imprimir(empleado01);
imprimir(gerente01);
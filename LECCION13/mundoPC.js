class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}



class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}


class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadoras ){
            computadorasOrden += `\n${computadora}`; // salto de linea
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}


let raton1 = new Raton('Infrarojo', 'Lenovo');
console.log( raton1.toString() );
let raton2 = new Raton('Infrarojo', 'Dell');
raton2.marca = 'Macbook';
console.log( raton2.toString() );


let teclado1 = new Teclado('USB', 'MSI');
let teclado2 = new Teclado('USB', 'RAZER');
console.log( teclado1.toString() );
console.log( teclado2.toString() );

let monitor01 = new Monitor('Apple','32 Inches');
let monitor02 = new Monitor('Samnsung','15 Inches');
let monitor03 =  new Monitor('MSI','17 Inches');
console.log(monitor01.toString());
console.log(monitor02.toString());

let computadora01 = new Computadora('Lenovo', monitor01, teclado1, raton1);
console.log(`${computadora01}`);

let computadora02 = new Computadora('Lenovo', monitor01, teclado1, raton1);
console.log(`${computadora01}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora01);
orden1.agregarComputadora(computadora02);
orden1.agregarComputadora(computadora02);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora02);
orden2.agregarComputadora(computadora01);
orden2.mostrarOrden();
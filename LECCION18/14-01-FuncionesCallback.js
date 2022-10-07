miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

// callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(operacion1, operacion2, funcionCallback){
    let res = operacion1 + operacion2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(155,3, imp);
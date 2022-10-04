//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);

const persona = {
    nombre: 'Olivia',
    apellido: 'Colman'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Taylor ';
    p1.apellido = 'Swift';
}

//Paso por referencia
cambiarValorObjeto( persona );
console.log( persona );
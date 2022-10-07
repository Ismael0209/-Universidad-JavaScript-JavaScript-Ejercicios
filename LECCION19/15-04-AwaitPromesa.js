

//promesa.then(valor => console.log(valor));

//async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//AWAIT 
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa );
}

funcionConPromesaYAwait();

'use strict'
try{
    let x = 50;
    miFuncion();
    throw 'Mi error asies';
}catch(error){
    console.log(error);
}
finally{
    console.log('termina la revision de errores');
}


console.log('Continuando asies');
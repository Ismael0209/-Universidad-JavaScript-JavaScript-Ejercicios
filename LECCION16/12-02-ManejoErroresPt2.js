'use strict'
let resultado = "ajsdjaskjd";

try{
x = 10;
    if(isNaN(resultado)) throw 'no es un  numero'
    else if ( resultado === '' ) throw 'es una cadena vacia'
    else if ( resultado >= 0 ) throw 'positive'
    else if ( resultado < 0 ) throw 'negativo'
}catch(error){
    console.log(error);
   // console.log(error.name);
    //console.log(error.message);
}finally{
    console.log('termina la resivion de errores asies');
    
}
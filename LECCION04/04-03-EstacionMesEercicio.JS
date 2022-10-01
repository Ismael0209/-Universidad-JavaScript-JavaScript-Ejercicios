
mes = 5;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Es invierno";
}else if (mes == 3 || mes == 4 || mes == 5){
    estacion = "Es primavera";
}else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Es verano";
}else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "Es otoño";
}else{
    estacion = "valor no encontrado";
}

console.log(estacion);
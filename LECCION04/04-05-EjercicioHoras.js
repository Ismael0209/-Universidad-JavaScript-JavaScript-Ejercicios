let hora = 08;
let estado;


if(hora >= 6 && hora<= 11){
    estado = "Buenos Dias";
}else if (hora >= 12 && hora<= 18){
    estado = "Buenos tardes";
}else if (hora >= 19 && hora<= 24){
    estado = "Buenos noches";
}else{
    estado = "Durmiendo";
}

console.log(estado);
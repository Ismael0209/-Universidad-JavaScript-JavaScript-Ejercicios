//let autos = new Array('BMW','Mercedes Benz','Volvo');

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i=0; i< autos.length; i++){
    console.log(autos[i]);
}

autos[1] = 'Ford';
console.log(autos[1]); 

autos.push('Audi');
console.log(autos);

console.log(autos.length);

autos[autos.length] = 'cadillac';
console.log(autos.length);

console.log(autos);

autos[6] = 'Kia';
console.log(autos);
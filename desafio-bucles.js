// 1 a 20 impares 
for(let i=1; i<20; i+=2) {
    console.log(i);
}
console.log ("--------------------------------");
// 100 a 0 imprimiendo solo multiplos de 3
for(let i = 100; i>=0; i--){
   if(i % 3 == 0){
    console.log(i);
   } 
}
console.log ("--------------------------------");
// imprimir una secuencia
for(let i=4; i>-4; i-=1.5) {
    console.log(i);
}
//sumar todos los valores de 1 a 100
let sum = 0;
for(let i=1; i<101; i++) {
    sum += i;
}
console.log(sum);

//multiplicar todos los valores del 1 al 12
let producto = 1;
for(let i=1; i<=12; i++) {
    producto *= i;
}
console.log(producto);
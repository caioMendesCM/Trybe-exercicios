let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("Exercício 1:\n");
for (let number of numbers) {
  console.log(number + "\n");
}

console.log("Exercício 2:\n");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  console.log(sum + "\n");
}

console.log("Exercício 3:\n");
let mediaAritmetica = 0;
sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
mediaAritmetica = sum / numbers.length;
console.log(mediaAritmetica + "\n");

console.log("Exercício 4:\n");
sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
mediaAritmetica = sum / numbers.length;
if (mediaAritmetica > 20) {
  console.log("Valor maior do que 20" + "\n");
} else {
  console.log("Valor menor ou igual a 20" + "\n");
}

console.log("Exercício 5:\n");
let maior = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > maior){
        maior = numbers[i];
    }
}
console.log(maior + "\n");

console.log("Exercício 6:\n");
let quantosImpares = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i]%2 != 0){
        quantosImpares++;
    }
}
console.log(quantosImpares + "\n");

console.log("Exercício 7:\n");
let menor = maior;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}
console.log(menor + "\n");

console.log("Exercício 8:\n");
let numbers2 = [];

for(let i = 0 ; i < 25 ; i++){
    numbers2[i] = (i+1)
    console.log(numbers2[i] + "\n");
}

console.log("Exercício 9:\n");
for(let number of numbers2){
    console.log((number/2) + "\n");
}
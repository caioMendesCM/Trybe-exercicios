// 1 -
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: 'A soma total de 1 a 50 é:'

function somaTotal() {
  let sum = 0;

  for (let i = 1; i <= 50; i++) {
    sum += i;
  }

  return sum;
}

console.log("A soma total de 1 a 50 é" + somaTotal() + "\n");

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

function contadorDeNumeros() {
  let contador = 0;

  for (let i = 2; i <= 150; i++) {
    if (i % 3 === 0) {
      contador++;
    }
  }

  if (contador === 50) {
    console.log("mensagem secreta");
  }

  return contador;
}

console.log(contadorDeNumeros() + "\n");

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

function pedraPapelTesoura(player1, player2) {
  if (player1 === "pedra" && player2 === "papel") {
    console.log("player 2 won");
  } else if (player1 === "pedra" && player2 === "tesoura") {
    console.log("player 1 won");
  } else if (player1 === player2) {
    console.log("A Ties");
  } else if (player1 === "papel" && player2 === "pedra") {
    console.log("player 1 won");
  } else if (player1 === "papel" && player2 === "tesoura") {
    console.log("player 2 won");
  } else if (player1 === "tesoura" && player2 === "pedra") {
    console.log("player 1 won");
  } else if (player1 === "tesoura" && player2 === "papel") {
    console.log("player 2 won");
  }
}

pedraPapelTesoura("pedra", "papel");


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

function maioridade(number){

    let idade = number>18?"maior de idade":"não é maior de idade";
    

    return idade;
}

console.log(maioridade(19));


// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.


function pessoaMaisNova(Carolzita, Murilo, Baêta){

    let idades = [Carolzita, Murilo, Baêta];
    let maior = 0;

    for (const idade of idades) {
        if(idade > maior){
            maior = idade;
        }
    }

    return maior;
}

console.log(pessoaMaisNova(10,11,12));
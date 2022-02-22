// FUNCIONANDO
function fatorial(number) {
  let resultado = number;

  for (let i = number - 1; i > 0; i--) {
    resultado *= i;
  }

  return resultado;
}

// FUNCIONANDO
function inverterPalavra(string) {
  let resultado = [];

  for (let i = 0; i < string.length; i++) {
    resultado[string.length - i] = string[i];
  }

  return resultado.join("");
}

function maiorPalavra(array) {
  let maior = array[0];

  for (let palavra of array) {
    if (palavra.length > maior.length) {
      maior = palavra;
    }
  }

  return maior;
}

function menorPalavra(array) {
  let menor = array[0];

  for (let palavra of array) {
    if (palavra.length < menor.length) {
      menor = palavra;
    }
  }

  return menor;
}

function numerosPrimos(number) {
  let numerosPrimos = [2, 3];
  let primo = true;

  for (let i = 4; i <= number; i++) {
    primo = true;
    for (let j = 2; j < i / 2; j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      numerosPrimos.push(i);
    }
  }

  return numerosPrimos;
}

function imprimirQuadrado(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}

function imprimirTrianguloRetangulo(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}

function imprimirTrianguloRetanguloInvertido(number) {
  let position = number;
  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= number; j++) {
      if (j < position) {
        process.stdout.write(" ");
      } else {
        process.stdout.write("*");
      }
    }
    console.log("");
    position--;
  }
}

function imprimirPiramide(number) {
  let meio = (number + 1) / 2;
  let posicionamentoEsquerda = meio;
  let posicionamentoDireita = meio;

  for (let i = 0; i <= meio; i++) {
    for (let j = 0; j <= number; j++) {
      if (j > posicionamentoEsquerda && j < posicionamentoDireita) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("");
    posicionamentoDireita += 1;
    posicionamentoEsquerda -= 1;
  }
}

function imprimirPiramideOca(number) {
  let meio = (number + 1) / 2;
  let posicionamentoEsquerda = meio;
  let posicionamentoDireita = meio;

  for (let i = 0; i <= meio; i++) {
    for (let j = 0; j <= number; j++) {
      if (j == posicionamentoEsquerda || j == posicionamentoDireita  ||  i == meio) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log("");
    posicionamentoDireita += 1;
    posicionamentoEsquerda -= 1;
  }

}
function invertePalavra(palavra) {
  let palavraArray = palavra.split("");
  palavraArray.reverse();
  let inverso = palavraArray.join("");

  return inverso;
}

function palindromo(palavra) {
  let resultado;

  let inverso = invertePalavra(palavra);

  if (palavra === inverso) {
    resultado = true;
  } else {
    resultado = false;
  }

  return resultado;
}

console.log("Exercício 1: ");
console.log(palindromo("arara") + "\n");

function maiorIndice(inteiros) {
  let maior = inteiros[0];
  let indice;

  for (const num in inteiros) {
    if (inteiros[num] > maior) {
      maior = inteiros[num];
      indice = num;
    }
  }

  return indice;
}

console.log("Exercício 2: ");
console.log(maiorIndice([2, 3, 6, 7, 10, 1]) + "\n");

function menorIndice(inteiros) {
  let menor = inteiros[0];
  let indice;

  for (const key in inteiros) {
    if (inteiros[key] < menor) {
      menor = inteiros[key];
      indice = key;
    }
  }

  return indice;
}

console.log("Exercício 3: ");
console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]) + "\n");

function maiorNome(nomes) {
  let maior = nomes[0];

  for (const key in nomes) {
    if (nomes[key].length > maior.length) {
      maior = nomes[key];
    }
  }

  return maior;
}

console.log("Exercício 4: ");
console.log(
  maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]) + "\n"
);

function maisRepete(palavras) {
  let repeticoes = {};
  let maior = 0;

  for (const key in palavras) {
    if (repeticoes[palavras[key].toString()] === undefined) {
      repeticoes[palavras[key].toString()] = 1;
    } else {
      repeticoes[palavras[key].toString()]++;
    }
  }

  for (const key in repeticoes) {
    if (repeticoes[key.toString()] > maior) {
      maior = key;
    }
  }

  return maior;
}

console.log("Exercício 5: ");
console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]) + "\n");

function somatorio(num) {
  let resultado = 0;

  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      resultado += i;
    }
  } else {
    resultado = "Por favor, insira um número positivo";
  }

  return resultado;
}

console.log("Exercício 6: ");
console.log(somatorio(5) + "\n");

function verificaFimPalavra(word, ending) {
  let resultado = false;

  let inverseWord = invertePalavra(word);
  let inverseEnding = invertePalavra(ending);
  let contador = 0;

  if (word < ending) {
    resultado = false;
  } else {
    for (let i = 0; i < inverseEnding.length; i++) {
      if (inverseWord[i] === inverseEnding[i]) {
        contador++;
      }
    }

    if (contador === inverseEnding.length) {
      resultado = true;
    }
  }

  return resultado;
}

console.log("Exercício 7: ");
console.log(verificaFimPalavra("trybe", "be") + "\n");

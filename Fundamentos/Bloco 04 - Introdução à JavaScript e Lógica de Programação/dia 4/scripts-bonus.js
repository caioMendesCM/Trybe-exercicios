const romanAlgarismsTable = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function convertRomanToOrdinary(romanAlgarism) {
  let valor = romanAlgarism.toLowerCase();
  let resultado = romanAlgarismsTable[valor[valor.length - 1]];
  let atual = resultado;

  for (let i = 2; i <= valor.length; i++) {
    const next = romanAlgarismsTable[valor[valor.length - i]];

    if (atual <= next) {
      resultado += next;
    } else {
      resultado -= next;
    }

    atual = resultado;
  }

  return resultado;
}

console.log(convertRomanToOrdinary("IV"));

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];
function arrayOfNumbers(array) {
  let resultado = [];

  for (const key in array) {
    if (typeof array[key] != "object") {
      if (array[key] % 2 === 0) {
        resultado.push(array[key]);
      }
    } else {
      for (const key2 in array[key]) {
        if (array[key][key2] % 2 === 0) {
          resultado.push(array[key][key2]);
        }
      }
    }
  }

  return resultado;
}

console.log(arrayOfNumbers(vector));

const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

function howManyInTheBasket(basket) {
  let resultado = {};

  for (let i = 0; i < basket.length; i++) {
    if (resultado[basket[i]] != resultado[basket[i]]) {
      resultado[basket[i]] = 0;
    }
    resultado[basket[i]]++;
  }

  return resultado;
}

let cesta = howManyInTheBasket(basket);
console.log("sua cesta possui:");
for (const key in cesta) {
  console.log(key, cesta[key]);
}

let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

function imprimirNomeMoradores(moradores) {
  for (const key in moradores) {
    console.log("\n" + key + ":");
    for (const key2 in moradores[key]) {
      console.log(moradores[key][key2].nome, moradores[key][key2].sobrenome);
    }
  }
}

imprimirNomeMoradores(moradores);

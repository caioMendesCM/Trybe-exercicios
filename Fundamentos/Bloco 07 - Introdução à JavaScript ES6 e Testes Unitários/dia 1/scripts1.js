// 1

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `    ${ifScope}.
    Ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
}

testingScope(true);

// 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const reOrder = oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${reOrder} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
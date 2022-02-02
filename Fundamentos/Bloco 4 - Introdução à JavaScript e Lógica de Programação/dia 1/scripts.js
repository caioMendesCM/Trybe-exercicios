function operacoesAritimeticas_1(operacao, a, b, resultado) {
  switch (operacao) {
    case "+":
      resultado = a + b;
      break;

    case "-":
      resultado = a - b;
      break;

    case "*":
      resultado = a * b;
      break;

    case "/":
      resultado = a / b;
      break;

    case "%":
      resultado = a % b;
      break;

    default:
      console.log("Não se aplica");
      break;
  }

  return resultado;
}

function maiorEntreDois_2(a, b) {
  let maior;

  if (a > b) {
    maior = a;
  } else {
    maior = b;
  }

  return maior;
}

function maiorEntreTres_3(a, b, c) {
  let maior;

  if (a > b && a > c) {
    maior = a;
  } else if (b > a && b > c) {
    maior = b;
  } else {
    maior = c;
  }

  return maior;
}

function positiveOrNegative_4(a) {
  const valor = a;
  let resultado;

  if (valor > 0) {
    resultado = "positive";
  } else if (valor < 0) {
    resultado = "negative";
  } else {
    resultado = 0;
  }

  return resultado;
}

function eTriangulo_5(a, b, c) {
  const anguloA = a;
  const anguloB = b;
  const anguloC = c;
  let resultado;

  if (anguloA < 0 || anguloB < 0 || anguloC < 0) {
    console.log("Insira um valor positivo");
    resultado = "erro";
  } else {
    if (anguloA + anguloB + anguloC == 180) {
      resultado = true;
    } else {
      resultado = false;
    }
  }

  return resultado;
}

function movimentoDaPeça_6(a) {
  const peca = a.toLowerCase();
  let movimento;

  switch (peca) {
    case pawn:
      movimento = "1 step foward movement";
      break;

    case rook:
      movimento = "infinitely foward movement";
      break;

    case knight:
      movimento = "L shaped movement";
      break;

    case bishop:
      movimento = "diagonal movement";
      break;

    case queen:
      movimento = "infinitely and in any direction movement";
      break;

    case king:
      movimento = "1 step in any direction movement";
      break;

    default:
      movimento = "peça não reconhecida";
      break;
  }

  return movimento;
}

function notasParaLetras_7(a) {
  const notaN = a;
  let notaL;

  if (notaN == 100) {
    notaL = "S";
  } else if (notaN < 100 && notaN >= 90) {
    notaL = "A";
  } else if (notaN < 90 && notaN >= 80) {
    notaL = "B";
  } else if (notaN < 80 && notaN >= 70) {
    notaL = "C";
  } else if (notaN < 70 && notaN >= 60) {
    notaL = "D";
  } else if (notaN < 60 && notaN >= 50) {
    notaL = "E";
  } else if (notaN < 50 && notaN >= 0) {
    notaL = "F";
  } else if (notaN > 100 || notaN < 0) {
    console.log("nota invalida");
    notaL = "nota invalida";
  }

  return notaL;
}

function umEPar_8(a, b, c) {
  const numA = a;
  const numB = b;
  const numC = c;

  let resultado;
  if (numA % 2 == 0 || numB % 2 == 0 || numC % 2 == 0) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

function umEImpar_9(a, b, c) {
  const numA = a;
  const numB = b;
  const numC = c;

  let resultado;
  if (numA % 2 != 0 || numB % 2 != 0 || numC % 2 != 0) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

function lucro_10(a, b, c) {
  const custo = a;
  const custoTotal = custo * 1.2;
  const venda = b;
  const numeroDeProdutos = c;
  const lucro = custoTotal - venda;
  let renda;

  renda = lucro * numeroDeProdutos;

  return renda;
}

function salarioLiquido_11(a) {
  const salarioBruto = a;
  let salarioLiquido;

  salarioLiquido = salarioBruto - descontos_11a(salarioBruto);

  return salarioLiquido;
}

function descontos_11a(a) {
  const salarioBruto = a;
  let descontoInss;
  let salarioBase;
  let descontoIr;
  let descontoTotal;

  if (salarioBruto < 1556.94) {
    descontoInss = salarioBruto * 0.08;
  } else if (salarioBruto > 1556.94 && salarioBruto < 2594.92) {
    descontoInss = salarioBruto * 0.09;
  } else if (salarioBruto > 2594.92 && salarioBruto < 5189.82) {
    descontoInss = salarioBruto * 0.11;
  } else if (salarioBruto > 5189.82) {
    descontoInss = 570.88;
  }

  salarioBase = salarioBruto - descontoInss;

  if (salarioBase < 1903.98) {
    descontoIr = 0;
  } else if (salarioBase > 1903.98 && salarioBase < 2826.65) {
    descontoIr = salarioBase * 0.075 - 142.8;
  } else if (salarioBase > 2826.65 && salarioBase < 3751.05) {
    descontoIr = salarioBase * 0.15 - 354.8;
  } else if (salarioBase > 3751.05 && salarioBase < 4664.68) {
    descontoIr = salarioBase * 0.225 - 636.13;
  } else if (salarioBase > 4664.68) {
    descontoIr = salarioBase * 0.275 - 869.36;
  }

  descontoTotal = descontoInss + descontoIr;

  return descontoTotal;
}

console.log(salarioLiquido_11(3000));

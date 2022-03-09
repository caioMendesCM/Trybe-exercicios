// Exercício 1

const createEmail = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  return { nome, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: createEmail('Pedro Guerra'),
    id2: createEmail('Luiza Drumond'),
    id3: createEmail('Carla Paiva'),
  };
  return employees;
};

// Exercício 2

const checkResult= (number, bet) => number === bet ? true : false;

const prizeDraw = (bet, callback) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);
  if (callback(randomNumber, bet)) {
    return 'Parabéns, você ganhou';
  }
  return 'Tente novamente';
};

// Exercício 3

const isCorrect = (rightAnswers, studentAnswers) => rightAnswers === studentAnswers ? true : false;

function checkAnswers(rightAnswers, studentAnswers, callback){
  let result = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
      if (callback(rightAnswers[i], studentAnswers[i])) {
        result += 1;
      } else if(studentAnswers[i] === 'N.A') {
        result = result;
      } else if(!callback(rightAnswers[i], studentAnswers[i])) {
        result -= 0.5;
      }
  }
  return result;
};
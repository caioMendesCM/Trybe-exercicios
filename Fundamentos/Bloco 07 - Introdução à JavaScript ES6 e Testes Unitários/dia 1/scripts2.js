// 1

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

// 2

const longestWord = string => {
  const splitedString = string.split(' ');
  let maior = splitedString[0];

  splitedString.forEach(string => {
    if(string.length > maior.length){
      maior = string;
    }  
  });

  return maior;
}

// 3

const btn = document.getElementById('btn');
const clickCount = document.getElementById('click-count');

btn.addEventListener('click', () => {
  clickCount.innerText = parseInt(clickCount.innerText) + 1;
});

// 4

const skills = ['HTML', 'CSS', 'Javascript', 'Git', 'Java'];

const insereNome = (nome) => `Tryber ${nome} aqui!`;

const listaSkills = (string) => `${string} Minhas 5 habilidades principais são: ${skills.sort().join(', ')}`;

console.log(listaSkills(insereNome('Caio')));
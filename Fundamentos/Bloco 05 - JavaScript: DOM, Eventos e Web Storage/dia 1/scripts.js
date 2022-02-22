let trybeGreen = 'rgb(76,164,109)';
let text = document.getElementById('text');
let title = document.getElementById('title');
let mainContent = document.getElementsByClassName('main-content')[0];
let centerContent = document.getElementsByClassName('center-content')[0];
let array = document.getElementsByTagName('p');

function changeText(node, text){
  node.innerText = text;
}

function changeColor(node, color){
  node.style.background = color
}

function exercicioToUperCase(array){
  for(let iterator of array){
    iterator.innerText = iterator.innerText.toUpperCase();
  }

}

function showTagsContent(array){
  for(let iterator of array){
    console.log(iterator);
  }
}

changeText(text, "Estar trabalhando e me aprofundando na área de desenvolvimento web.");
changeColor(mainContent, trybeGreen);
changeColor(centerContent, 'white');
changeText(title, "Exercício 5.1 - Javascript");
exercicioToUperCase(array);
showTagsContent(array);
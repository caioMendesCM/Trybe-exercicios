let preferences = {
  screenBackground: 'white',
  textBackground: 'white',
  fontSize: 'initial',
  lineHeight: 'initial',
  fontFamily: 'auto',
};

let body = document.body;
let text = document.getElementById('text');
let inputs = document.querySelectorAll('.userPreferences');
let selected = document.querySelector('.selected');
let optionsContainer = document.querySelector('.options-container');
let options = document.querySelectorAll('.option');

for(let input of inputs){
  input.addEventListener('input', changeUserPreferences);
}

function changeUserPreferences(event){

  if(event.target.id === 'fontSize' || event.target.id === 'lineHeight'){
    preferences[event.target.id] = event.target.value;
  }
  preferences[event.target.id] = event.target.value;
  updatePreferences();
  saveToLocalStorage();
}

function saveToLocalStorage(){
  localStorage.setItem('userPreferences' , JSON.stringify(preferences));
}

function getPreferences(){
  preferences = JSON.parse(localStorage.getItem('userPreferences'));
}

function updatePreferences(){
  for(let input of inputs){
    if(preferences[input.id] !== undefined){
      updateText(input.name, input.id);
    }
  }
}

function updateText(style, key){
  text.style[style] = preferences[key];
}

function toggleOptionsActive(){
  optionsContainer.classList.toggle('active');
}

selected.addEventListener('click', () => {

  toggleOptionsActive();

});

options.forEach(option => {
  option.addEventListener('click', () => {
    selected.innerHTML = option.querySelector("label").innerHTML;
    toggleOptionsActive();
  })
});

window.onload = function(){
  getPreferences();
  updatePreferences();
}
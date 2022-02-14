let preferences = {
  screenBackground: 'white',
  textBackground: 'white',
  fontSize: 'initial',
  lineHeight: 'initial',
  fontFamily: 'auto',
};

let inputs = document.querySelectorAll('.userPreferences');

for(let input of inputs){
  input.addEventListener('input', changeUserPreferences);
}

function changeUserPreferences(event){

  if(event.target.id === 'fontSize' || event.target.id === 'lineHeight'){
    preferences[event.target.id] = `${event.target.value}px`;
  }
  preferences[event.target.id] = event.target.value;
}

function saveToLocalStorage(){
  localStorage.setItem('userPreferences' , JSON.stringify(preferences));
}

function setPreferences(){
  localStorage.getItem();
}
let preferences = {
  background: "white",
  color: "black",
  fontSize: "initial",
  lineHeight: "initial",
  font: "auto",
};

let body = document.body;
let text = document.getElementById("text");
let inputs = document.querySelectorAll(".userPreferences");
let selected = document.querySelector(".selected");
let optionsContainer = document.querySelector(".options-container");
let options = document.querySelectorAll(".option");

for (let input of inputs) {
  input.addEventListener("input", changeUserPreferences);
}

function changeUserPreferences(event) {
  console.log(event.target.className);

  if (event.target.className.includes("color")) {
    preferences[event.target.name.toString()] = event.target.value;
  } else if (event.target.className.includes("number")) {
    preferences[event.target.name] = event.target.value;
  }

  updatePreferences();
  savePreferencesToLocalStorage();
}

function savePreferencesToLocalStorage() {
  localStorage.setItem("userPreferences", JSON.stringify(preferences));
}

function getPreferencesFromLocalStorage() {
  preferences = JSON.parse(localStorage.getItem("userPreferences"));
}

function updatePreferences() {
  for (const preference in preferences) {
    if (!isNaN(parseInt(preferences[preference]))) {
      text.style[preference] = `${preferences[preference]}px`;
    }
    text.style[preference] = preferences[preference];
  }
}

function toggleOptionsActive() {
  optionsContainer.classList.toggle("active");
}

selected.addEventListener("click", () => {
  toggleOptionsActive();
});

options.forEach((option) => {
  option.addEventListener("click", (event) => {
    selected.innerHTML = option.querySelector("label").innerHTML;
    toggleOptionsActive();
    preferences[event.target.firstElementChild.name] = event.target.firstElementChild.id;
    updatePreferences();
    savePreferencesToLocalStorage();
  });
});

window.onload = function () {
  if (localStorage.getItem("userPreferences") !== null) {
    getPreferencesFromLocalStorage();
  }
  updatePreferences();
};

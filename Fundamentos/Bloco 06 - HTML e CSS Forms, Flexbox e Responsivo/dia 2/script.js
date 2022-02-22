const inputs = document.querySelectorAll(".input");
const text = document.querySelector(".text");

let preferences = {
  "background-color": "white",
  color: "black",
  "font-size": "large",
  "line-height": "2",
  "font-family": "sans-serif",
};

function addListeners(elementArray) {
  for (const element of elementArray) {
    element.addEventListener("input", updatePreferences);
  }
}

function updatePreferences(event) {
  const element = event.target;
  for (const style in preferences) {
    preferences[element.id] = element.value;
  }
  updateText();
}

function updateText() {
  for (const preference in preferences) {
    text.style[preference] = preferences[preference];
  }
}

addListeners(inputs);

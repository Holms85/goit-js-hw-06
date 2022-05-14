function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  spanColor: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
  bodyColor: document.querySelector("body"),
};
const colorChange = () => {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = refs.bodyColor.backgroundColor;
};
refs.btnChangeColor.addEventListener("click", colorChange);

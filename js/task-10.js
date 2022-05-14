// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const refs = {
//   divCreate: document.querySelector("#boxes"),
//   bodyColor: document.querySelector("body"),
//   inputCount: document.querySelector("input"),
//   btnCreate: document.querySelector("button[data-create]"),
//   btnDestroy: document.querySelector("button[data-destroy]"),
// };
// refs.btnCreate.addEventListener("click", newValue);
// refs.btnDestroy.addEventListener("click", destroyBox);

// function createBoxes(amount) {
//   let boxSize = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const newBoxes = document.createElement("div");
//     newBoxes.style.width = `${boxSize + i * 10}px`;
//     newBoxes.style.height = `${boxSize + i * 10}px`;
//     newBoxes.style.backgroundColor = getRandomHexColor();
//     refs.divCreate.append(newBoxes);
//   }
// }

// function newValue() {
//   let amount = refs.inputCount.value;
//   createBoxes(amount);
// }

// function destroyBox() {
//   refs.inputCount.value = 0;
//   refs.divCreate.innerHTML = "";
// }

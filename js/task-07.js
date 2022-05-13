const refs = {
  inputControl: document.querySelector("#font-size-control"),
  changeText: document.querySelector("#text"),
};

refs.inputControl.addEventListener("input", (e) => {
  refs.changeText.style.fontSize = `${e.currentTarget.value}px`;
});

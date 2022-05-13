const refs = {
  inputLength: document.querySelector("input[data-length]"),
  inputText: document.querySelector("#validation-input"),
};

refs.inputText.addEventListener("blur", (e) => {
  if (
    e.currentTarget.value.length !== Number(refs.inputLength.dataset.length)
  ) {
    refs.inputText.classList.add("invalid");
  }
  refs.inputText.classList.add("valid");
});

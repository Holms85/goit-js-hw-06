const refs = {
  textInput: document.querySelector("#name-input"),
  textSpan: document.querySelector("#name-output"),
};

refs.textInput.addEventListener("input", (e) => {
  if (refs.textInput.value === "") {
    return (refs.textSpan.textContent = "Anonymus");
  }
  refs.textSpan.textContent = e.currentTarget.value;
});

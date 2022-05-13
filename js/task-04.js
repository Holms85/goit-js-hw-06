let counterValue = 0;

const spanRefs = document.querySelector("#value");
const decrementRefs = document.querySelector('button[data-action="decrement"]');
const incrementRefs = document.querySelector('button[data-action="increment"]');

function counterDown() {
  counterValue -= 1;
  spanRefs.textContent = counterValue;
}
decrementRefs.addEventListener("click", counterDown);

function counterUp() {
  counterValue += 1;
  spanRefs.textContent = counterValue;
}
incrementRefs.addEventListener("click", counterUp);

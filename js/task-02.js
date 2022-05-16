const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");
function createList() {
  const newList = ingredients.map((elem) => {
    const newElement = document.createElement("li");
    newElement.classList.add("item");
    newElement.textContent = elem;
    return newElement;
  });
  ingredientsRef.append(...newList);
}
createList();

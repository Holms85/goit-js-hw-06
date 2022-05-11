const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");
const createList = ingredients.map((text) => {
  const newList = document.createElement("li");
  newList.classList.add("item");
  newList.textContent = text;
  return ingredientsRef.append(newList);
});

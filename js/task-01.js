const categoriesRef = document.querySelectorAll('li.item');
const count = categoriesRef => console.log(`Number of categories: ${categoriesRef.length}`);
count(categoriesRef);

const itemRef = document.querySelectorAll('.item');
const category = itemRef => [...itemRef].map(element => console.log(`Category: ${element.children[0].textContent}
Elements: ${element.children[1].children.length} `));
category(itemRef)






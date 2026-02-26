const categoryContainer = document.querySelector("#categorylist ");
console.log(categoryContainer);

const categories = ["Accessories", "Apparel", "Footwear", "Free Items", "Personal Care", "Sporting Goods"];

console.log("category: ", categories[3]);

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => console.log(data));

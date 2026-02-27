"use strict";
const productContainer = document.querySelector("main");
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  console.log("productsArr", productsArr);
  productContainer.innerTHML = "";
  productsArr.forEach((product) => {
    console.log("product", productsArr.id);

    productContainer.innerHTML += `<article class="product-box">
        <div class="img-box">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
        </div>
        <strong><h3 class="product-title">Sporty bag</h3></strong>
        <p class="category-title">${product.articletype} | ${product.brandname}</p>
        <div>
          <p>DKK 350,-</p>
          <a href="products.html" class="read-more">Read more</a>
        </div>
      </article>`;
  });
}

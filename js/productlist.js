"use strict";
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log("category", category);

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

    productContainer.innerHTML += `<article class="product-box ${product.soldout ? "soldout" : ""} ${product.discount ? "discounted" : ""} ">
        <div class="img-box">
       ${product.discount ? `<span class='discount-tag'>-${product.discount}%</span>` : ""}
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
        </div>
        <strong><h3 class="product-title">${product.productdisplayname}</h3></strong>
        <p class="category-title">${product.articletype} | ${product.brandname}</p>
        <div>
        <p>${product.gender}<p>
          <p class="originalprice">${product.price},-</p>
      <p class="priceafter"><span>${Math.ceil((product.price / 100) * product.discount)} </span>,-</p>
          <a href="products.html?id=${product.id}" class="read-more">Read more</a>
        </div>
      </article>`;
  });
}

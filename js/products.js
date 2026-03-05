const params = new URLSearchParams(window.location.search);
console.log(params);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.price);

    const productContainer = document.querySelector("#productContainer");
    console.log(data.category);

    productContainer.innerHTML = `<div class="product_page ${data.discount ? "discounted" : ""}">
    ${data.discount ? `<span class="discount-tag">-${data.discount}%</span>` : ""}

        <div class="product_image"><img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" /></div>

        <div class="product_info">
          <h1>Product Information</h1>

          <h2>${data.brandname}</h2>

          <p>
            <strong>Model name</strong><br/>
            ${data.productdisplayname}
          </p>

          <p>
            <strong>Type</strong><br />
            ${data.articletype}
          </p>

          <p>
            <strong>Inventory number</strong><br />
            ${data.id}
          </p>
<p>
            <strong>Season</strong><br />
            ${data.season}<br />
          </p>
        
        </div>

        <div class="buy_box">
          <h2>${data.productdisplayname}</h2>
          <p class="category">${data.brandname} | ${data.articletype}</p>
          <p class="originalprice">${data.price},- </p>
          <p class="priceafter">
          <span>${Math.ceil(data.price - (data.price * data.discount) / 100)}</span>,-</p>
          
            ${data.articletype == "Backpacks" ? "" : "<p class='choose'>Choose a size</p><select><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option></select>"}

          ${data.soldout ? `<button disabled>SOLD OUT</button>` : `<button>Add to basket</button>`}
        </div>
      </div>`;
  });

// if (?) else (:) Altså if "(her indsættes intet værdi, da backpack er onesize for eksmepel)" og : er de options vi giver til trøjer i forhold til størrelser.

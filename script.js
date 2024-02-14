"use strict";

let cardWrapper = $(".phone__items");

let brandOption = $("#brands");

let priceOption = $("#price");

let lettersOption = $("#letters");



let brand = [];

// ------------ RENDER FUNCTION --------------------

function renderProducts(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      const { title, brand, thumbnail, price, discountPercentage } = el;

      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
    
           <div class="hover:shadow-xl">
            <div
                class="phone-cards border-[1px] border-[#EDEDED] rounded-tr-2xl rounded-tl-2xl py-[15px] px-[70px] bg-[#F5F5F5] relative">
                <div class="phone-discount">${Math.round(
                  discountPercentage
                )}% OFF </div>
                <img src="${thumbnail}" alt="phone" class="card-img">
            </div>
            <div
                class="pt-[12px] px-[12px] border-[1px] border-[#EDEDED] rounded-br-2xl rounded-bl-2xl">
                
                <p class="font-semibold text-[#222222] mb-[10px]">${title}</p>
                <div class="flex gap-[10px] mb-[10.5px] border-b border-[#EDEDED]">
                    <p class="font-bold mb-[9.5px]">${price}</p>
                    <p class="line-through font-normal text-[#222222] mb-[9.5px]">${Math.round(
                      price * 1.44
                    )}</p>
                </div>
                    <p class="text-[#249B3E] font-semibold mb-[10px]">Save - ₹32999} | ${brand}</p>
                </div>
            </div>
         `;

      cardWrapper.appendChild(card);
    });
  } else {
    cardWrapper.innerHTML = `<h1 class="text-center"> NOT FOUND </h1>`;
  }
}

renderProducts(product);



function findBrand(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      if (!brand.includes(el.brand)) {
        brand.push(el.brand);
      }
    });
  }
}

findBrand(product.products);

// ------------ render barnd ------------------------

function renderBrand(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      const option = render("option", "", el);
      brandOption.appendChild(option);
    });
  }
}

renderBrand(brand);

brandOption.addEventListener("change", (e) => {
  sortBrands(e.target.value);
});



function sortBrands(brandNmae) {
  cardWrapper.innerHTML = "";

  const filterBrand = product.products.filter((el) => {
    return el.brand.toLowerCase() == brandNmae.toLowerCase();
  });

  renderProducts(filterBrand);
}
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

      const card = render(
        "div",
        "card",
        `
                         <div class="hover:shadow-xl">
            <div
                class="phone-cards border-[1px] border-[#EDEDED] rounded-tr-2xl rounded-tl-2xl py-[15px] px-[70px] bg-[#F5F5F5] relative">
                <div class="phone-discount">${Math.round(
                  discountPercentage
                )}% OFF </div>
                <img src="${thumbnail}" alt="phone" class="card-img">
            </div>
            <div
                class="pt-[12px] px-[16px] border-[1px] border-[#EDEDED] rounded-br-2xl rounded-bl-2xl">
                <p class = "font-bold text-center mb-[6px]">${brand}</p>
                
                <p class="font-semibold text-[#222222] mb-[10px] h-[50px]">${title}</p>
                <div class="flex gap-[10px] mb-[10.5px] border-b border-[#EDEDED]">
                    <p class="font-bold mb-[9.5px]">${price}</p>
                    <p class="line-through font-normal text-[#222222] mb-[9.5px]">${Math.round(
                      price * 1.44
                    )}</p>
                </div>
                    <p class="text-[#249B3E] font-semibold mb-[10px]">Save - ₹32999}</p>
                    
                </div>
            </div>
           `
      );

      cardWrapper.appendChild(card);
    });
  } else {
    cardWrapper.innerHTML = `<h1 class="text-center"> NOT FOUND </h1>`;
  }
}

renderProducts(product.products);

// --------------- find brand -----------------------
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

// ------------ render brand ------------------------

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

// --------------- Sort brand -------------------

function sortBrands(brandNmae) {
  cardWrapper.innerHTML = "";

  const filterBrand = product.products.filter((el) => {
    return el.brand.toLowerCase() == brandNmae.toLowerCase();
  });

  renderProducts(filterBrand);
}

// ------------------------------------------------------------------------------------------------------

// Price bo'yicha sortlash

// Narx o'sib borishi
function sortProductsByPriceAscending(productList) {
  return productList.products.slice().sort((a, b) => a.price - b.price);
}

const res = sortProductsByPriceAscending(product);
console.log("Sorted by price (ascending):", res);

// Narx kamayib borishi

function sortPriceDescending(productList) {
  return productList.products.slice().sort((a, b) => b.price - a.price);
}
const result = sortPriceDescending(product);
console.log("Sorted by price (descending):", result);

// -------------------------------------------
// Convert object to uzb language
function convertObject(products) {
  return products.map((el) => {
    return {
      id: `${el.id}`,
      nomi: `${el.title}`,
      tarif: `${el.description}`,
      narxi: `${el.price}`,
      aksiya: `${el.discountPercentage}`,
      reyting: `${el.rating}`,
      zaxirasi: `${el.stock}`,
      brand: `${el.brand}`,
      kategoriya: `${el.category}`,
      rasm: { images: el.images },
    };
  });
}

const newObj = convertObject(product.products);
console.log(newObj);

// ------------------------------------------
// Brand bo'yicha filtirlash

function filterBrand(productList, brandName) {
  return productList.filter(
    (el) => el.brand.toLowerCase() === brandName.toLowerCase()
  );
}
const resul = filterBrand(product.products, "Apple");
console.log(resul);

// ------------------------------------------
// Category bo'yicha filtirlash

function filteredCategory(productLst, categoryName) {
  return productLst.filter(
    (el) => el.category.toLowerCase() === categoryName.toLowerCase()
  );
}

console.log(filteredCategory(product.products, "smartphones"));


// -------------------------------------------
// Rating bo'yicha filtirlash

function filteredRating(productList, minRating) {
  return productList.filter(
    (el) => el.rating >= minRating
  );
}

console.log(filteredRating(product.products, 4.5));

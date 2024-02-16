"use strict";

let cardWrapper = $(".phone__items");

let brandOption = $("#brands");

let priceOption = $("#price");

let lettersOption = $("#letter");

let inputSearch = $("#search");

let categoryOption = $("#category");

let ratingOption = $("#rating");

// ----------------- VARIABLES ----------------
const bascket = [];

const cart = [];

let data = [];

let brand = [];

let category = [];

let rating = [];

// ------------ RENDER FUNCTION --------------------
function renderProducts(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      const {
        title,
        brand,
        thumbnail,
        price,
        discountPercentage,
        id,
        category,
        rating,
      } = el;

      const card = render(
        "div",
        "card",
        `
                         <div class="hover:border-blue-500 border-2 rounded-2xl">
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
                
                <p class="font-semibold text-[#222222] mb-[10px] ">${title}</p>
                <div class="flex gap-[10px] mb-[10.5px] border-b border-[#EDEDED]">
                    <p class="font-bold mb-[9.5px]">${price}</p>
                    <p class="line-through font-normal text-[#222222] mb-[9.5px]">${Math.round(
                      price * 1.44
                    )}</p>
                </div>
                  <div class="flex justify-between items-start">
                   <button data-state="${id}" class="save bg-[#249B3E] text-white rounded-xl py-2 px-4 font-semibold mb-[11px]">Save</button>
                   <div class="-mt-1 text-right">
                   <span class="text-[14px] text-[#222222]">${category}</span><br>
                    <span class="text-[15px] font-bold text-[#222222]">${rating}</span>
                   </div>
                   </div>
                </div>
            </div>
           `
      );
      card.dataset.info = el.id;
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

// --------------- find category -----------------------
function findCategory(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      if (!category.includes(el.category)) {
        category.push(el.category);
      }
    });
  }
}
findCategory(product.products);

// --------------Render Category-------------------

function renderCategory(data) {
  if (data.length > 0) {
    data.forEach((el) => {
      const option = render("option", "", el);
      categoryOption.appendChild(option);
    });
  }
}

renderCategory(category);

categoryOption.addEventListener("change", (e) => {
  sortCategory(e.target.value);
});

// --------------- Sort brand -------------------

function sortBrands(brandName) {
  cardWrapper.innerHTML = "";

  const filterBrand = product.products.filter((el) => {
    return el.brand.toLowerCase() == brandName.toLowerCase();
  });

  renderProducts(filterBrand);
}

// --------------- Sort category -------------------

function sortCategory(categoryName) {
  cardWrapper.innerHTML = "";

  const filterCategory = product.products.filter((el) => {
    return el.category.toLowerCase() == categoryName.toLowerCase();
  });

  renderProducts(filterCategory);
}

// // ------------------------------------------------------------------------------------------------------

// // Price bo'yicha sortlash

// // Narx o'sib borishi
// function sortProductsByPriceAscending(productList) {
//   return productList.products.slice().sort((a, b) => a.price - b.price);
// }

// const res = sortProductsByPriceAscending(product);
// console.log("Sorted by price (ascending):", res);

// // Narx kamayib borishi

// function sortPriceDescending(productList) {
//   return productList.products.slice().sort((a, b) => b.price - a.price);
// }
// const result = sortPriceDescending(product);
// console.log("Sorted by price (descending):", result);

// // -------------------------------------------
// // Convert object to uzb language
// function convertObject(products) {
//   return products.map((el) => {
//     return {
//       id: `${el.id}`,
//       nomi: `${el.title}`,
//       tarif: `${el.description}`,
//       narxi: `${el.price}`,
//       aksiya: `${el.discountPercentage}`,
//       reyting: `${el.rating}`,
//       zaxirasi: `${el.stock}`,
//       brand: `${el.brand}`,
//       kategoriya: `${el.category}`,
//       rasm: { images: el.images },
//     };
//   });
// }

// const newObj = convertObject(product.products);
// console.log(newObj);

// // ------------------------------------------
// // Brand bo'yicha filtirlash

// function filterBrand(productList, brandName) {
//   return productList.filter(
//     (el) => el.brand.toLowerCase() === brandName.toLowerCase()
//   );
// }
// const result2 = filterBrand(product.products, "Apple");
// console.log(result2);

// // ------------------------------------------
// // Category bo'yicha filtirlash

// function filteredCategory(productLst, categoryName) {
//   return productLst.filter(
//     (el) => el.category.toLowerCase() === categoryName.toLowerCase()
//   );
// }

// console.log(filteredCategory(product.products, "smartphones"));

// // -------------------------------------------
// // Rating bo'yicha filtirlash

// function filteredRating(productList, minRating) {
//   return productList.filter((el) => el.rating >= minRating);
// }
// console.log(filteredRating(product.products, 4.5));

// ---------- SORTING A-Z , Z-A  ----------

lettersOption.addEventListener("change", (e) => {
  sortingByLetter(product.products, e.target.value);
});

priceOption.addEventListener("change", (e) => {
  sortingByPrice(product.products, e.target.value);
});

ratingOption.addEventListener("change", (e) => {
  sortingByRating(product.products, e.target.value);
});

function sortingByLetter(productList, state) {
  cardWrapper.innerHTML = "";

  let sortedByLetter = productList.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  if (state == "a-z") {
    renderProducts(sortedByLetter.reverse());
  } else {
    renderProducts(sortedByLetter);
  }
}

function sortingByPrice(productList, state) {
  console.log(state);

  cardWrapper.innerHTML = "";

  let sortedByPrice = productList.sort((a, b) => a.price - b.price);

  if (state == "up") {
    renderProducts(sortedByPrice);
  } else {
    renderProducts(sortedByPrice.reverse());
  }
}

function sortingByRating(productList, state) {
  console.log(state);

  cardWrapper.innerHTML = "";

  let sortedByRating = productList.sort((a, b) => a.rating - b.rating);

  if (state == "rise") {
    renderProducts(sortedByRating);
  } else {
    renderProducts(sortedByRating.reverse());
  }
}

// ---------- SORTING A-Z , Z-A  ----------

inputSearch.addEventListener("keyup", (e) => {
  cardWrapper.innerHTML = "";
  searchProduct(e.target.value);
});

function searchProduct(searchTerm) {
  const searchReslut = product.products.filter(
    // brand bo'yicha qidirish
    (el) => el.brand.toLowerCase().includes(searchTerm.toLowerCase())
    // || description bo'yicha qidirish
    // el.description.toLowerCase().includes(searchTerm.toLowerCase())
    // || title bo'yicha qidirish
    // (el) => el.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderProducts(searchReslut);
}

cardWrapper.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-state");

  console.log(id);

  if (e.target.classList.contains("save")) {
    // console.log("clicked card");

    if (!bascket.includes(e.target.getAttribute("data-state"))) {
      bascket.push(id);
      cart.push(searchById(id)[0]);

      localStorage.setItem("bascket", JSON.stringify(bascket));
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      console.log("bu avval qo'shilgan");
    }
  }
});

function searchById(id) {
  return product.products.filter((el) => el.id == id);
}

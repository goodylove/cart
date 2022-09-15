import allBags from "./bag.js";
import allCaps from "./cap.js";
import allGlass from "./glasses.js";
const navSh = document.querySelector(".shit");
const navGl = document.querySelector(".glas");
const navCap = document.querySelector(".capss");
const navBag = document.querySelector(".big");
const shirtCon = document.querySelector(".shirt-con");
const capCon = document.querySelector(".cap-con");
const glassCon = document.querySelector(".glasses-con");
const bagCon = document.querySelector(".bag-con");
const show = document.querySelector(".show");
const showC = document.querySelector(".show-c");
const cart = document.querySelector(".cart");
const home = document.querySelector(".home");
const search = document.querySelector(".search");
const getStore = JSON.parse(localStorage.getItem("cart")) || [];
getStore ? (cart.textContent = getStore.length) : console.log("nothing");
// const orderShirts = [];

const allShirts = [
  {
    shirt: "imges/shirt1.jpg",
    name: "Vintage",
    price: "150",
    discount: "$280",
  },
  {
    shirt: "imges/shirt2.jpg",
    name: "Plain Shirt",
    price: "200",
    discount: "$250",
  },
  {
    shirt: "imges/shirt3.jpg",
    name: "Fancy Shirt",
    price: "100",
    discount: "$150",
  },
  {
    shirt: "imges/shirt4.jpg",
    name: "Flower Shirt",
    price: "200",
    discount: "$210",
  },
  {
    shirt: "imges/shirt5.jpg",
    name: "Fancy Shirt",
    price: "100",
    discount: "$150",
  },
  {
    shirt: "imges/shirt7.jpg",
    name: "Vintage",
    price: "150",
    discount: "$280",
  },
];

function showAllItems(items, g) {
  const showAllShirts = items.map((shirts) => {
    return ` <div class="p-2 shadow-md  my-3 ">
   <div class="lg:flex flex-col">
    <img src="${shirts.shirt}" alt="" class="w-[300px] h-[200px] shirt" />
   <div class="flex justify-between w-[100%] items-center p-3">
   <div class="flex items-center justify-center flex-col">
   <span class="shirt-name">${shirts.name}</span>
     <span class="flex items-center">
     <span>$</span> <span class="font-bold text-xl price">${shirts.price}</span>
     </span>
       
     </div>
     <div>
       <span class="text-gray-200"><strike>${shirts.discount}</strike></span>
     </div>
     </div>
     <div class="flex pl-2 w-auto justify-center">
     <button
       type="button"
       class="bg-gray-200 rounded-lg w-[51%] flex justify-between items-center p-2 btn1 hidden"
       >
       <span class="text-orange-500 text-xl font-bold sub">-</span>
       <span class="content">0</span>
       <span class="text-orange-500 text-xl font-bold add">+</span>
     </button>
     <button
       type="button"
       class="bg-orange-500 rounded-lg w-[51%] h-13 flex justify-between items-center p-2 btn2"
     >
       <span class="flex justify-center w-full items-center text-white"
         ><i class="fas fa-shopping-cart px-4"></i>Add to cart</span
         >
         </button>
         </div>
         </div>
 </div>`;
  });

  g.innerHTML = showAllShirts.join("");
}
showAllItems(allBags, bagCon);
showAllItems(allCaps, capCon);
showAllItems(allGlass, glassCon);
showAllItems(allShirts, shirtCon);
const j = [...allBags, ...allCaps, ...allShirts, ...allGlass];

const subItem = document.querySelector(".sub");
const addItem = document.querySelector(".add");

const btn2 = document.querySelectorAll(".btn2");

btn2.forEach((element) => {
  const btnCon = element.parentElement;
  const generlP = btnCon.parentElement;
  const nameShirt = generlP.querySelector(".shirt-name");
  const shirtPrice = generlP.querySelector(".price");
  const shirtImg = generlP.querySelector(".shirt");

  element.addEventListener("click", () => {
    let allSh = {
      nameS: nameShirt.textContent,
      priceS: shirtPrice.textContent,
      imgS: shirtImg.src,
    };
    getStore.push(allSh);

    cart.textContent = getStore.length;
    localStorage.setItem("cart", JSON.stringify(getStore));
    const btn1 = btnCon.querySelector(".btn1");
    const content = btnCon.querySelector(".content");

    btn1.style.display = "flex";
    element.style.display = "none";
    // cart.textContent++;
    content.textContent++;
  });
});
cart.addEventListener("click", () => {
  const got = JSON.parse(localStorage.getItem("cart"));
  const boughtItem = got.map((p) => {
    console.log(p);
    return `    <div class="p-2 shadow-md  my-3 ">
     <div class="lg:flex flex-col">
     <img src="${p.imgS}" alt="" class="w-[300px] h-[200px] shirt" />
     <div class="flex justify-between w-[100%] items-center p-3">
     <div class="flex items-center justify-center flex-col">
     <span class="shirt-name">${p.nameS}</span>
     <span class="flex items-center">
     <span>$</span>
     <span class="font-bold text-xl price">${p.priceS}</span>
     </span>
     </div>
     <div>
    
     </div>
     </div>
    
     </div>
     </div>`;
  });
  showC.style.display = "block";
  show.innerHTML = boughtItem.join(" ");

  let allOrder = got.map((p) => {
    return parseInt(p.priceS);
  });
  console.log(allOrder);
  let sum = allOrder.reduce((total, num) => {
    return total + num;
  });
  console.log(sum);
  document.querySelector(".total-shirt").innerHTML = `$${sum}`;
});

navBag.addEventListener("click", () => {
  if (glassCon || shirtCon || capCon) {
    glassCon.style.display = "none";
    shirtCon.style.display = "none";
    capCon.style.display = "none";
    bagCon.style.display = "flex";
  } else {
    glassCon.style.display = "block";
    shirtCon.style.display = "block";
    capCon.style.display = "block";
  }
});
navCap.addEventListener("click", () => {
  if (glassCon || shirtCon || bagCon) {
    glassCon.style.display = "none";
    shirtCon.style.display = "none";
    bagCon.style.display = "none";
    capCon.style.display = "flex";
  } else {
    glassCon.style.display = "block";
    shirtCon.style.display = "block";
    bagCon.style.display = "block";
  }
});
navSh.addEventListener("click", () => {
  if (glassCon || bagCon || capCon) {
    glassCon.style.display = "none";
    bagCon.style.display = "none";
    capCon.style.display = "none";
    shirtCon.style.display = "flex";
  } else {
    glassCon.style.display = "block";
    bagCon.style.display = "block";
    capCon.style.display = "block";
  }
});
navGl.addEventListener("click", () => {
  if (bagCon || shirtCon || capCon) {
    bagCon.style.display = "none";
    shirtCon.style.display = "none";
    capCon.style.display = "none";
    glassCon.style.display = "flex";
  } else {
    bagCon.style.display = "block";
    shirtCon.style.display = "block";
    capCon.style.display = "block";
  }
});
home.addEventListener("click", () => {
  shirtCon.style.display = "flex";
  bagCon.style.display = "flex";
  glassCon.style.display = "flex";
  capCon.style.display = "flex";
});

search.addEventListener("keyup", searchItem);

function searchItem(show) {
  let pass = j.filter((p) => {
    let searchValue = search.value.toLowerCase();
    if (p.name.match(searchValue)) {
      return p;
    } else {
      searchValue == p;
    }
  });
  console.log(pass);
  const Display = pass.map(() => {
    return ` <div class="p-2 shadow-md  my-3 ">
    <div class="lg:flex flex-col">
     <img src="${shirts.shirt}" alt="" class="w-[300px] h-[200px] shirt" />
    <div class="flex justify-between w-[100%] items-center p-3">
    <div class="flex items-center justify-center flex-col">
    <span class="shirt-name">${shirts.name}</span>
      <span class="flex items-center">
      <span>$</span> <span class="font-bold text-xl price">${shirts.price}</span>
      </span>
        
      </div>
      <div>
        <span class="text-gray-200"><strike>${shirts.discount}</strike></span>
      </div>
      </div>
      <div class="flex pl-2 w-auto justify-center">
      <button
        type="button"
        class="bg-gray-200 rounded-lg w-[51%] flex justify-between items-center p-2 btn1 hidden"
        >
        <span class="text-orange-500 text-xl font-bold sub">-</span>
        <span class="content">0</span>
        <span class="text-orange-500 text-xl font-bold add">+</span>
      </button>
      <button
        type="button"
        class="bg-orange-500 rounded-lg w-[51%] h-13 flex justify-between items-center p-2 btn2"
      >
        <span class="flex justify-center w-full items-center text-white"
          ><i class="fas fa-shopping-cart px-4"></i>Add to cart</span
          >
          </button>
          </div>
          </div>
  </div>`;
  });
}
// show.innerHTML = showShirts.join("");
// let allOrder = orderShirts.map((p) => {
//   return parseInt(p.price);
// });
// let sum = allOrder.reduce((total, num) => {
//   return total + num;
// });
// document.querySelector(".total-shirt").innerHTML = `$${sum}`;
// console.log(sum);
// const showShirts = orderShirts.map((p) => {
//    <div class="p-2 shadow-md  my-3 ">
// <div class="lg:flex flex-col">
// <img src="${p.img}" alt="" class="w-[300px] h-[200px] shirt" />
// <div class="flex justify-between w-[100%] items-center p-3">
// <div class="flex items-center justify-center flex-col">
// <span class="shirt-name">${p.name}</span>
// <span class="flex items-center">
// <span>$</span>
// <span class="font-bold text-xl price">${p.price}</span>
// </span>
// </div>
// <div>

// </div>
// </div>

// </div>
// </div>`;
// });
// addItem.addEventListener("click", () => {
//   addToCart();
//   if (cart.textContent == 0 || cart.textContent > 0) {
//     cart.textContent++;
//     content.textContent++;
//   }
// });
// subItem.addEventListener("click", () => {
//   addToCart();
//   if (content.textContent < 0 || cart.textContent < 0) {
//     cart.textContent = 0;
//     content.textContent = 0;
//   }
//   if (cart.textContent > 0) {
//     cart.textContent--;
//     content.textContent--;
//   }
// });

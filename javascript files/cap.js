const capCon = document.querySelector(".cap-con");

const allCaps = [
  {
    caps: "cap/black.jpeg",
    name: "Bobmarley cap",
    price: "$24",
    discount: "$30",
  },
  {
    caps: "cap/blue.jpeg",
    name: "Blue Face Cap",
    price: "$15",
    discount: "$20",
  },
  {
    caps: "cap/white.jpeg",
    name: "White Face Cap",
    price: "$30",
    discount: "$40",
  },
  { caps: "cap/red.jpeg", name: "Red Face Cap", price: "$25", discount: "$35" },
  {
    caps: "cap/lemon.jpeg",
    name: "White Face Cap",
    price: "$30",
    discount: "$40",
  },
  {
    caps: "cap/yellow.jpeg",
    name: "Yellow Round Cap",
    price: "$17",
    discount: "$23",
  },
];
function shirtsContain() {
  const showAllCap = allCaps.map((shirts) => {
    return ` <div class="p-2 shadow-md  my-3">
   
     <img src="${shirts.caps}" alt="" class="w-[300px] h-[200px]" />
  
   
   <div class="flex justify-between w-[100%] items-center p-3">
     <div class="flex items-center justify-center flex-col">
     <span>${shirts.name}</span>
       <span class="font-bold text-xl">$${shirts.price}</span>
       
     </div>
     <div>
       <span class="text-gray-200"><strike>${shirts.discount}</strike></span>
     </div>
   </div>
   <div class="flex pl-2 w-auto justify-center">
     <button
       type="button"
       class="bg-gray-200 rounded-lg w-[51%] flex justify-between items-center p-2 btn5 hidden"
     >
       <span class="text-orange-500 text-xl font-bold sub-cap">-</span>
       <span class="content-cap">0</span>
       <span class="text-orange-500 text-xl font-bold add-cap">+</span>
     </button>
     <button
       type="button"
       class="bg-orange-500 rounded-lg w-[51%] h-13 flex justify-between items-center p-2 btn6"
     >
       <span class="flex justify-center w-full items-center text-white"
         ><i class="fas fa-shopping-cart px-4"></i>Add to cart</span
       >
     </button>
   </div>
 </div>`;
  });
  capCon.innerHTML = showAllCap.join("");
  const subItemCap = document.querySelector(".sub-cap");
  const addItemCap = document.querySelector(".add-cap");
  //   const content = document.querySelector(".content");
  const cart = document.querySelector(".cart");
  //   const btn1 = document.querySelector(".btn1");
  const btn6 = document.querySelectorAll(".btn6");

  btn6.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("working");
      const btnCon = element.parentElement;
      const btn5 = btnCon.querySelector(".btn5");
      const contentCap = btnCon.querySelector(".content-cap");

      // console.log(btn1);
      btn5.style.display = "flex";
      element.style.display = "none";
      cart.textContent++;
      contentCap.textContent++;
    });
  });
}

shirtsContain();
// addItemCap.addEventListener("click", () => {
//   addToCart();
//   if (cart.textContent == 0 || cart.textContent > 0) {
//     cart.textContent++;
//     contentCap.textContent++;
//   }
// });
// subItemCap.addEventListener("click", () => {
//   addToCart();
//   if (contentCap.textContent < 0 || cart.textContent < 0) {
//     cart.textContent = 0;
//     contentCap.textContent = 0;
//   }
//   if (cart.textContent > 0) {
//     cart.textContent--;
//     contentCap.textContent--;
//   }
// });

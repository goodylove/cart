const capCon = document.querySelector(".cap-con");

const allCaps = [
  { caps: "cap/black.jpeg", price: 5000 },
  { caps: "cap/blue.jpeg", price: 135 },
  { caps: "cap/white.jpeg", price: 6700 },
  { caps: "cap/red.jpeg", price: 13500 },
  { caps: "cap/lemon.jpeg", price: 11500 },
  { caps: "cap/yellow.jpeg", price: 12500 },
];
function shirtsContain() {
  const showAllCap = allCaps.map((shirts) => {
    return ` <div class="p-2 shadow-md  my-3">
   <div>
     <img src="${shirts.caps}" alt="" class="w-[300px] h-[200px]" />
   </div>
   <div></div>
   <div class="flex justify-between w-[100%] items-center p-3">
     <div class="flex items-center justify-center">
       <span class="font-bold text-xl">${shirts.price}00</span>
       <span class="rounded-lg h-6 px-1 w-10 bg-pink-100 text-orange-400"
         >50%</span
       >
     </div>
     <div>
       <span class="text-gray-200"><strike>$250.00</strike></span>
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
 </div>`;
  });
  capCon.innerHTML = showAllCap.join("");
  const subItem = document.querySelector(".sub");
  const addItem = document.querySelector(".add");
  //   const content = document.querySelector(".content");
  const cart = document.querySelector(".cart");
  //   const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelectorAll(".btn2");

  btn2.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("working");
      const btnCon = element.parentElement;
      const btn1 = btnCon.querySelector(".btn1");
      const content = btnCon.querySelector(".content");

      console.log(btn1);
      btn1.style.display = "flex";
      element.style.display = "none";
      cart.textContent++;
      content.textContent++;
    });
  });
}

shirtsContain();
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

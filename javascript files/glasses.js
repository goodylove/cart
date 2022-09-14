const glassCon = document.querySelector(".glasses-con");

const allGlass = [
  {
    glass: "glasses/black.png",
    name: "Black Sunglass",
    price: "$20",
    discount: "$25",
  },
  {
    glass: "glasses/blue.png",
    name: "Blue Sunglass",
    price: "$15",
    discount: "$20",
  },
  {
    glass: "glasses/reading1.png",
    name: "Plain Glass",
    price: "$30",
    discount: "$35",
  },
  {
    glass: "glasses/reading2.png",
    name: "Reading Glass",
    price: "$20",
    discount: "$25",
  },
  {
    glass: "glasses/red.png",
    name: "Red Sunglass",
    price: "$25",
    discount: "$35",
  },
  {
    glass: "glasses/reading3.png",
    name: "Pure Glass",
    price: "$14",
    discount: "$20",
  },
];
function shirtsContain() {
  const showAllGlass = allGlass.map((p) => {
    return ` <div class="p-2 shadow-md  my-3">
   
    
    
    <img src="${p.glass}" alt="" class="w-[300px] h-[200px]" />
   <div class="flex justify-between w-[100%] items-center p-3">
     <div class="flex items-center justify-center flex-col">
     <span>${p.name}</span>
       <span class="font-bold text-xl">${p.price}</span> 
       
     </div>
     <div>
       <span class="text-gray-200"><strike>${p.discount}00</strike></span>
     </div>
   </div>
   <div class="flex pl-2 w-auto justify-center">
     <button
       type="button"
       class="bg-gray-200 rounded-lg w-[51%] flex justify-between items-center p-2 btn3 hidden"
     >
       <span class="text-orange-500 text-xl font-bold sub-glass">-</span>
       <span class="content-glass">0</span>
       <span class="text-orange-500 text-xl font-bold add-glass">+</span>
     </button>
     <button
       type="button"
       class="bg-orange-500 rounded-lg w-[51%] h-13 flex justify-between items-center p-2 btn4"
     >
       <span class="flex justify-center w-full items-center text-white"
         ><i class="fas fa-shopping-cart px-4"></i>Add to cart</span
       >
     </button>
   </div>
 </div>`;
  });
  glassCon.innerHTML = showAllGlass.join("");
  const subItemGlass = document.querySelector(".sub-glass");
  const addItemGlass = document.querySelector(".add-glass");
  //   const content = document.querySelector(".content");
  const cart = document.querySelector(".cart");
  //   const btn1 = document.querySelector(".btn1");
  const btn4 = document.querySelectorAll(".btn4");

  btn4.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("working");
      const btnCon = element.parentElement;
      const btn3 = btnCon.querySelector(".btn3");
      const contentGlass = btnCon.querySelector(".content-glass");

      // console.log(btn1);
      btn3.style.display = "flex";
      element.style.display = "none";
      cart.textContent++;
      contentGlass.textContent++;
    });
  });
}

shirtsContain();
// addItemGlass.addEventListener("click", () => {
//   addToCart();
//   if (cart.textContent == 0 || cart.textContent > 0) {
//     cart.textContent++;
//     contentGlass.textContent++;
//   }
// });
// subItemGlass.addEventListener("click", () => {
//   addToCart();
//   if (contentGlass.textContent < 0 || cart.textContent < 0) {
//     cart.textContent = 0;
//     contentGlass.textContent = 0;
//   }
//   if (cart.textContent > 0) {
//     cart.textContent--;
//     contentGlass.textContent--;
//   }
// });

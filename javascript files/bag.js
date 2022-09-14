const bagCon = document.querySelector(".bag-con");
const oderBag = [];

const allBags = [
  {
    bags: "bags/bag1.png",
    name: "Yellow School Bag",
    price: "$55",
    discount: "$60",
  },
  {
    bags: "bags/bag2.png",
    name: "Blue School Bag",
    price: "$55",
    discount: "$60",
  },
  { bags: "bags/bag3.png", name: "Simple Bag", price: "$25", discount: "$30" },
  {
    bags: "bags/bag4.png",
    name: "Steelblue Bag",
    price: "$29",
    discount: "$35",
  },
  {
    bags: "bags/bag5.png",
    name: "school bag",
    price: "$100",
    discount: "$150",
  },
  {
    bags: "bags/pink.png",
    name: "Yellow Suitcase",
    price: "$100",
    discount: "$150",
  },
];
function shirtsContain() {
  const showAllBags = allBags.map((shirts) => {
    return ` <div class="p-2 my-3 shadow-md">
  
     <img src="${shirts.bags}" alt="" class="w-[300px] h-[200px]" />
  
  
   <div class="flex justify-between w-[100%] items-center p-3">
     <div class="flex items-center justify-center flex-col w-[45%]">
     <spa> ${shirts.name}</span>
       <span class="font-bold text-xl">${shirts.price}</span>
      
     </div>
     <div>
       <span class="text-gray-200"><strike>${shirts.discount}</strike></span>
     </div>
   </div>
   <div class="flex pl-2 w-auto justify-center">
     <button
       type="button"
       class="bg-gray-200 rounded-lg w-[51%] flex justify-between items-center p-2 btn7 hidden"
     >
       <span class="text-orange-500 text-xl font-bold sub-bag">-</span>
       <span class="content-bag">0</span>
       <span class="text-orange-500 text-xl font-bold add-bag">+</span>
     </button>
     <button
       type="button"
       class="bg-orange-500 rounded-lg w-[51%] h-13 flex justify-between items-center p-2 btn8"
     >
       <span class="flex justify-center w-full items-center text-white"
         ><i class="fas fa-shopping-cart px-4"></i>Add to cart</span
       >
     </button>
   </div>
 </div>`;
  });
  bagCon.innerHTML = showAllBags.join("");
  const subItemBag = document.querySelector(".sub-bag");
  const addItemBag = document.querySelector(".add-bag");
  //   const content = document.querySelector(".content");
  const cart = document.querySelector(".cart");
  //   const btn1 = document.querySelector(".btn1");
  const btn8 = document.querySelectorAll(".btn8");

  btn8.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("working");
      const btnCon = element.parentElement;
      const btn7 = btnCon.querySelector(".btn7");
      const contentBag = btnCon.querySelector(".content-bag");

      btn7.style.display = "flex";
      element.style.display = "none";
      cart.textContent++;
      contentBag.textContent++;
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

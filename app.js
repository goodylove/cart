import allItems from "./JSON.js";
console.log(allItems);
const capCon = document.querySelector(".cap-con");
const shirtCon = document.querySelector(".shirt-con");
const glassCon = document.querySelector(".glasses-con");
const shoeCon = document.querySelector(".shoes-con");
const watchCon = document.querySelector(".watch-con");
const bagCon = document.querySelector(".bag-con");

const watchItem = allItems[0].map((p) => {
  return ` <div class="p-3 shadow-md">
   <div>
     <img src="${p.imgSrc}" alt="" class="w-[500px] h-[300px]" />
   </div>
   <div></div>
   <div class="flex justify-between w-[100%] items-center p-3">
     <div class="flex items-center justify-center">
       <span class="font-bold text-2xl">${p.price}00</span>
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
watchCon.innerHTML = watchItem.join("");

const shirtItem = allItems[1].map((v) => {
  return ` <div class="p-3 shadow-md">
    <div>
      <img src="${v.shirt}" alt="" class="w-[500px] h-[300px]" />
    </div>
    <div></div>
    <div class="flex justify-between w-[100%] items-center p-3">
      <div class="flex items-center justify-center">
        <span class="font-bold text-2xl">${v.price}00</span>
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
console.log(shirtItem);
shirtCon.innerHTML = shirtItem.join("");

const capItem = allItems[3].map((p) => {
  return ` <div class="p-3 shadow-md">
     <div>
       <img src="${p.imgSrc}" alt="" class="w-[500px] h-[300px]" />
     </div>
     <div></div>
     <div class="flex justify-between w-[100%] items-center p-3">
       <div class="flex items-center justify-center">
         <span class="font-bold text-2xl">${p.price}00</span>
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
capCon.innerHTML = capItem.join("");
const Item = allItems[4].map((p) => {
  return ` <div class="p-3 shadow-md">
    <div>
      <img src="${p.imgSrc}" alt="" class="w-[500px] h-[300px]" />
    </div>
    <div></div>
    <div class="flex justify-between w-[100%] items-center p-3">
      <div class="flex items-center justify-center">
        <span class="font-bold text-2xl">${p.price}00</span>
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
// itemCon.innerHTML = Item.join("")

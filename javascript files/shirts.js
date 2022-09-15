const shirtCon = document.querySelector(".shirt-con");
const orderShirts = [];
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
function shirtsContain() {
  const showAllShirts = allShirts.map((shirts) => {
    return ` <div class="p-2 shadow-md  my-3 ">
   <div class="lg:flex flex-col">
    <img src="${shirts.shirt}" alt="" class="w-[300px] h-[200px] shirt" />
   <div class="flex justify-between w-[100%] items-center p-3">
   <div class="flex items-center justify-center flex-col">
   <span class="shirt-name">${shirts.name}</span>
       <span class="font-bold text-xl price">${shirts.price}</span>
       
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

  shirtCon.innerHTML = showAllShirts.join("");
  const subItem = document.querySelector(".sub");
  const addItem = document.querySelector(".add");
  //   const content = document.querySelector(".content");
  const cart = document.querySelector(".cart");
  //   const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelectorAll(".btn2");

  btn2.forEach((element) => {
    const btnCon = element.parentElement;
    const generlP = btnCon.parentElement;
    const nameShirt = generlP.querySelector(".shirt-name");
    const shirtPrice = generlP.querySelector(".price");
    const shirtImg = generlP.querySelector(".shirt");

    element.addEventListener("click", () => {
      let getShirts = {
        name: nameShirt.textContent,
        price: shirtPrice.textContent,
        img: shirtImg.src,
      };
      orderShirts.push(getShirts);
      console.log(orderShirts);
      const btn1 = btnCon.querySelector(".btn1");
      const content = btnCon.querySelector(".content");

      btn1.style.display = "flex";
      element.style.display = "none";
      cart.textContent++;
      content.textContent++;
      const show = document.querySelector(".show");
      cart.addEventListener("click", () => {
        const showC = document.querySelector(".show-c");
        showC.style.display = "block";
      });
      function tryShirt() {
        const showShirts = orderShirts.map((p) => {
          console.log(p);
          return ` <div class="p-2 shadow-md  my-3 ">
     <div class="lg:flex flex-col">
      <img src="${p.img}" alt="" class="w-[300px] h-[200px] shirt" />
     <div class="flex justify-between w-[100%] items-center p-3">
       <div class="flex items-center justify-center flex-col">
       <span class="shirt-name">${p.name}</span>
         <span class="font-bold text-xl price">${p.price}</span>
         
       </div>
       <div>
        
       </div>
     </div>
     
     </div>
   </div>`;
        });
        show.innerHTML = showShirts.join("");
        const allPrice = orderShirts.map((p) => {
          return parseInt(p);
        });

        const sum = allPrice.reduce((total, num) => {
          return total + num;
        });
        console.log(sum);
      }
      tryShirt();
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

// for (let index = 0; index < allShirts.length; index++) {
//   btn2[index].addEventListener("click", () => {
//     orderShirts.push(allShirts[index]);
//   });
// }

// const showShirts = orderShirts.map((p) => {
//   console.log(p);
//   return  <div class="p-2 shadow-md  my-3 ">
// <div class="lg:flex flex-col">
// <img src="${p[2]}" alt="" class="w-[300px] h-[200px] shirt" />
// <div class="flex justify-between w-[100%] items-center p-3">
// <div class="flex items-center justify-center flex-col">
// <span class="shirt-name">${p[0]}</span>
//  <span class="font-bold text-xl price">${p[1]}</span>

// </div>
// <div>

// </div>
// </div>
// <div class="flex pl-2 w-auto justify-center">
// <button
//  type="button"
//  class="bg-gray-200 rounded-lg w-[51%] flex justify-between items-center p-2 btn1 hidden"
// >
//  <span class="text-orange-500 text-xl font-bold sub">-</span>
//  <span class="content">0</span>
//  <span class="text-orange-500 text-xl font-bold add">+</span>
// </button>
// <button
//  type="button"
//  class="bg-orange-500 rounded-lg w-[51%] h-13 flex justify-between items-center p-2 btn2"
// >
//  <span class="flex justify-center w-full items-center text-white"
//    ><i class="fas fa-shopping-cart px-4"></i>Add to cart</span
//  >
// </button>
// </div>
// </div>
// </div>;
// });
// show.innerHTML = showShirts.join("");

{
  /* <div class="flex pl-2 w-auto justify-center">
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
     </div> */
}

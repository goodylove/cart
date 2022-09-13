const sliderCon = document.querySelector(".slider-con");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const subItem = document.querySelector(".sub");
const addItem = document.querySelector(".add");
const content = document.querySelector(".content");
const cart = document.querySelector(".cart");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
let position = 0;

// const allShirts = [
//   { shirt: "imges/shirt1.jpg" },
//   { shirt: "imges/shirt2.jpg" },
//   { shirt: "imges/shirt3.jpg" },
//   { shirt: "imges/shirt4.jpg" },
//   { shirt: "imges/shirt5.jpg" },
//   { shirt: "imges/shirt7.jpg" },
// ];

const showAllShirts = allShirts.map((items) => {
  return `
  
  <div class="slider w-full h-[300px]" style="flex-shrink: 0">
  <img src="${items.shirt}" class="w-full h-full"/>
  </div>
  `;
});
sliderCon.innerHTML = showAllShirts.join("");
function activateSlider() {
  const slider = document.querySelectorAll(".slider");
  left.addEventListener("click", (e) => {
    position = position - 1;
    if (position < 1) {
      position = slider.length - 1;
      left.style.opacity = "0.4";
    } else {
      left.style.opacity = "1";
    }
    slider.forEach((items) => {
      items.style.transform = `translateX(-${position - 1}00%)`;
      items.style.transition = "0.3s";
    });
  });

  right.addEventListener("click", (e) => {
    position = position + 1;
    if (position > slider.length - 1) {
      position = 0;
      right.style.opacity = "0.4";
    } else {
      right.style.opacity = "1";
    }
    slider.forEach((items) => {
      items.style.transform = `translateX(-${position}00%)`;
      items.style.transition = "0.3s";
    });
  });
}
activateSlider();

function addToCart() {
  btn2.addEventListener("click", () => {
    btn1.style.display = "flex";
    btn2.style.display = "none";
    cart.textContent++;
    content.textContent++;
  });
}
addToCart();
addItem.addEventListener("click", () => {
  addToCart();
  if (cart.textContent == 0 || cart.textContent > 0) {
    cart.textContent++;
    content.textContent++;
  }
});
subItem.addEventListener("click", () => {
  addToCart();
  if (content.textContent < 0 || cart.textContent < 0) {
    cart.textContent = 0;
    content.textContent = 0;
  }
  if (cart.textContent > 0) {
    cart.textContent--;
    content.textContent--;
  }
});

// cart.textContent = contentItem2;
// content.textContent++;

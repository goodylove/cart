const sliderCon = document.querySelector(".slider-con");
let position = 0;
const allShirts = [
  { shirt: "imges/shirt1.jpg" },
  { shirt: "imges/shirt2.jpg" },
  { shirt: "imges/shirt3.jpg" },
  { shirt: "imges/shirt4.jpg" },
  { shirt: "imges/shirt5.jpg" },
  { shirt: "imges/shirt7.jpg" },
];

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
  for (let index = 0; index < slider.length; index++) {
    slider[index].style.transform = `translateX(-${position}00%)`;
    slider[index].style.transition = "0.3s";
    console.log(slider[index]);
  }
  position++;
  if (position > slider.length - 1) {
    position = slider.length - 6;
  }
}
setInterval(() => {
  activateSlider();
}, 4000);

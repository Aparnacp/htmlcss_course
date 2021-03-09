const imgs = document.getElementById("imgs");
const left = document.getElementById("left");
const right = document.getElementById("right");
const img = document.querySelectorAll(".image-container img");

console.log(img);

let index = 0;

let slideShowInterval = setInterval(slider, 2000);

function slider() {
  console.log(index);
  index++;
  changeImg();
}

function changeImg() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }
  imgs.style.transform = `translateX(${-700 * index}px)`;
}

function resetInterval() {
  clearInterval(slideShowInterval);
  slideShowInterval = setInterval(slider, 2000);
}

left.addEventListener("click", () => {
  index--;
  changeImg();
  resetInterval();
});

right.addEventListener("click", () => {
  index++;
  changeImg();
  resetInterval();
});

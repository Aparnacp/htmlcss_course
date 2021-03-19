const imgs = document.getElementById("imgs");
const left = document.getElementById("left");
const right = document.getElementById("right");

const imagesArr = document.querySelectorAll("#imgs img");

let index = 0;
let slideshowInterval = setInterval(slideShow, 2000);

function slideShow() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > 4 || index < 0) {
    imgs.style.transition = `none 0s`;
  }

  if (index == 1) {
    imgs.style.transition = `transform 0.5s`;
  }
  if (index >= 1 && index <= 4) {
    imgs.style.transition = `transform 0.5s`;
  }
  if (index > imagesArr.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imagesArr.length - 1;
  }

  imgs.style.transform = `translateX(${-700 * index}px)`;
}

function resetSlideShow() {
  clearInterval(slideshowInterval);
  slideshowInterval = setInterval(slideShow, 2000);
}

left.addEventListener("click", function () {
  //index = index - 1;
  index--;
  changeImage();
  resetSlideShow();
});

right.addEventListener("click", function () {
  index++;
  changeImage();
  resetSlideShow();
});

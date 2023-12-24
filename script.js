//? slider code started
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
var currentSlide = 0;

document.getElementById("next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }
  slides[currentSlide].classList.toggle("active");
  dots[currentSlide].classList.toggle("activeDot");
  slides[moveTo].classList.toggle("active");
  dots[moveTo].classList.toggle("activeDot");
  currentSlide = moveTo;
}

document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
  bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});

window.onload = setInterval(function () {
  changeSlide(currentSlide + 1);
}, 10000);

//! slider code started

//? preview box js started
document.querySelectorAll("#slider  img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".preview-box").style.display = "block";
    document.querySelector(".preview-box-img img").src =
      image.getAttribute("src");
  };
});

document.querySelector(".fa-xmark").onclick = () => {
  document.querySelector(".preview-box").style.display = "none";
};

document.querySelector(".preview-box").onclick = () => {
  this.classList.toggle("animation");
};
//! preview box js ended

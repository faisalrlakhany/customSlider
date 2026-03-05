const main = document.querySelector("#main");
const images = [
  "https://picsum.photos/id/235/1000/500",
  "https://picsum.photos/id/238/1000/500",
  "https://picsum.photos/id/234/1000/500",
  "https://picsum.photos/id/235/1000/500",
  "https://picsum.photos/id/239/1000/500",
  "https://picsum.photos/id/240/1000/500",
  "https://picsum.photos/id/250/1000/500",
  "https://picsum.photos/id/255/1000/500",
  "https://picsum.photos/id/230/1000/500",
  "https://picsum.photos/id/220/1000/500",
  "https://picsum.photos/id/217/1000/500",
  "https://picsum.photos/id/227/1000/500",
];

var counter = 0;

images.forEach((img, index) => {
  main.innerHTML += `
     <img src="${img}" class="slide" style="left:${index * 100}%">`;
});

const slides = document.querySelectorAll(".slide");
const currentCounter = document.getElementById("current");
const totalCounter = document.getElementById("total");

totalCounter.textContent = slides.length;

const updateCounter = () => {
  currentCounter.textContent = counter + 1;
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  updateCounter();
};

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImage();
};

const goNext = () => {
  counter++;

  if (counter >= slides.length) {
    counter = 0;
  }

  slideImage();
};

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") goPrev();
  if (e.key === "ArrowRight") goNext();
});

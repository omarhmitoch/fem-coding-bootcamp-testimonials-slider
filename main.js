const imageContainer = document.querySelector(".image-container");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
const userInfos = document.querySelector(".ml6");
let x = false;
let i = 0;
const images = ["first", "second"];
const ps = document.querySelectorAll(".text-container p");

ps.forEach((tw) => {
  tw.innerHTML = tw.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});

// Wrap every letter in a span
let textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
let textWrapper2 = document.querySelector(".ml6 .letters2");
textWrapper2.innerHTML = textWrapper2.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (i == 0) i = 2;
  i--;
  if (x == false) changeImage();
});

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  i++;
  if (i == 2) i = 0;
  console.log(i);
  if (x == false) changeImage();
});

const changeImage = () => {
  imageContainer.className = "image-container";
  imageContainer.classList.add(`${images[i]}`);
  ps.forEach((p) => p.classList.remove("active"));
  userInfos.classList.add("active");
  ps[i].classList.add("active");
  animations();
};

const animations = () => {
  userInfos.classList.remove("active");
  anime.timeline({ loop: false }).add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 50,
    delay: (el, i) => 50 * i,
  });
  anime.timeline({ loop: false }).add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 100,
    delay: (el, i) => 50 + 30 * i,
  });
  anime.timeline({ loop: false }).add({
    targets: ".ml13 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 100,
    delay: (el, i) => 1 + 30 * i,
  });
};

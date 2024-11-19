let images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
];

function render() {
  let content = document.getElementById("imageContainer");

  content.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    content.innerHTML += renderHtml(image, i);
  }
}

function renderHtml (image, i) {
  return /*html*/ `
  <div onclick="openFullscreen(${i})" class="imageBox">
      <img  src="${image}" alt="">
  </div>
  `;
}

function openFullscreen(i) {
  const fullscreen = document.getElementById("fullscreen");
  fullscreen.style.display = "flex";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    fullscreen.style.opacity = 1;
  }, 10);

  const image = images[i];
  fullscreen.innerHTML = openFullscreenHtml(image, i);
}

function openFullscreenHtml (image, i) {
  return /*html*/ `
  <button onclick="previousImg(${i})"><img src="./img/chevron-left-solid.svg" alt=""></button>
  <div class="fullscreenBox">
      <img src="${image}" alt="">
  </div>
  <button onclick="nextImg(${i})"><img src="./img/chevron-right-solid.svg" alt=""></button>
`;
}

function closeFullscreen(event) {
  const fullscreen = document.getElementById("fullscreen");
  if (event.target === fullscreen) {
    fullscreen.style.opacity = 0;
    document.body.style.overflow = "auto";
    setTimeout(() => {
      fullscreen.style.display = "none";
    }, 300);
  }
}

function closeStartscreen() {
  const startScreen = document.getElementById("startScreen");

  document.body.style.overflow = "auto";
  startScreen.style.backdropFilter = "blur(0px)";
  startScreen.style.opacity = 0;
  setTimeout(() => {
    startScreen.style.display = "none";
  }, 1000);
}

function nextImg(i) {
  i++;
  if (i == images.length) {
    i = 0;
  }
  openFullscreen(i);
}

function previousImg(i) {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  openFullscreen(i);
}

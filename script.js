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


/**
 * Renders the images in the `images` array into the HTML element with the ID "imageContainer".
 * Clears the existing content of the container before rendering the new images.
 * Iterates over the `images` array and appends the HTML for each image to the container.
 */
function render() {
  let content = document.getElementById("imageContainer");

  content.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    content.innerHTML += renderHtml(image, i);
  }
}


/**
 * Generates HTML markup for an image box.
 *
 * @param {string} image - The URL of the image to be displayed.
 * @param {number} i - The index of the image, used for the onclick event.
 * @returns {string} The HTML string for the image box.
 */
function renderHtml (image, i) {
  return /*html*/ `
  <div onclick="openFullscreen(${i})" class="imageBox">
      <img  src="${image}" alt="">
  </div>
  `;
}


/**
 * Opens an image in fullscreen mode.
 *
 * @param {number} i - The index of the image to be displayed in fullscreen.
 */
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


/**
 * Generates HTML for displaying an image in fullscreen mode with navigation buttons.
 *
 * @param {string} image - The URL of the image to be displayed in fullscreen.
 * @param {number} i - The index of the current image, used for navigation.
 * @returns {string} The HTML string for the fullscreen image display with navigation buttons.
 */
function openFullscreenHtml (image, i) {
  return /*html*/ `
  <button onclick="previousImg(${i})"><img src="./img/chevron-left-solid.svg" alt=""></button>
  <div class="fullscreenBox">
      <img src="${image}" alt="">
  </div>
  <button onclick="nextImg(${i})"><img src="./img/chevron-right-solid.svg" alt=""></button>
`;
}


/**
 * Closes the fullscreen view when the event target is the fullscreen element.
 *
 * @param {Event} event - The event object triggered by the user interaction.
 */
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


/**
 * Closes the start screen by removing the blur effect, fading out the opacity,
 * and then setting the display to "none" after a delay.
 */
function closeStartscreen() {
  const startScreen = document.getElementById("startScreen");

  document.body.style.overflow = "auto";
  startScreen.style.backdropFilter = "blur(0px)";
  startScreen.style.opacity = 0;
  setTimeout(() => {
    startScreen.style.display = "none";
  }, 1000);
}


/**
 * Advances to the next image in the gallery.
 *
 * @param {number} i - The current index of the image.
 */
function nextImg(i) {
  i++;
  if (i == images.length) {
    i = 0;
  }
  openFullscreen(i);
}


/**
 * Navigates to the previous image in the gallery.
 *
 * @param {number} i - The current index of the image.
 */
function previousImg(i) {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  openFullscreen(i);
}

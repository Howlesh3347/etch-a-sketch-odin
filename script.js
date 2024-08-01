const bodyContainer = document.querySelector("#body-container");
let sketchContainer = document.querySelector("#sketch-container");
sketchContainer.setAttribute("class", "containerCss");

const resetButton = document.querySelector("#reset-btn");

let canvasResolution = 50;

createPixel(canvasResolution, false);

resetButton.addEventListener("click", resetCanvas);

function resetCanvas() {
  // Output : Ask for New Resolution and Create new Canvas
  newPixelCount = prompt("Specify the New Canvas Resolution", "");
  createPixel(newPixelCount, true);
}

function colorRandomize() {
  // Output : Give Random RGB Value
  randomColor = Math.floor(Math.random() * 256);
  return randomColor;
}

function createPixel(pixelCount, reset) {
  // Output : Square Container populated with square boxes

  canvasResolution = pixelCount;
  let opacityValue = 0.1;
  pixelWidth = 600 / pixelCount;
  pixelHeight = 600 / pixelCount;

  if (reset === true) {
    sketchContainer.remove();
    sketchContainer = document.createElement("div");
    sketchContainer.setAttribute("class", "containerCss");
    bodyContainer.appendChild(sketchContainer);
  }

  for (i = 0; i < pixelCount * pixelCount; i++) {
    const pixel = document.createElement("div");
    pixel.classList.toggle("pixel");
    pixel.setAttribute("class", "pixelCss");

    pixel.style.width = `${pixelWidth}px`;
    pixel.style.height = `${pixelHeight}px`;

    pixel.addEventListener("mouseenter", () => {
      pixel.style.backgroundColor = `rgb(${colorRandomize()}, ${colorRandomize()}, ${colorRandomize()})`;
      pixel.style.opacity = opacityValue;
      opacityValue = Math.min(opacityValue + 0.1, 1.0);
    });

    sketchContainer.appendChild(pixel);
  }
  resetButton.textContent = `The current Canvas Resolution is ${canvasResolution} x ${canvasResolution}.
    You can change it by pressing this button`;
}

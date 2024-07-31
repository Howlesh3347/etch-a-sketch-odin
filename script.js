const bodyContainer = document.querySelector("#body-container");
let sketchContainer = document.querySelector("#sketch-container");
sketchContainer.setAttribute("class", "containerCss");

const resetButton = document.querySelector("#reset-btn");

let canvasResolution = 50;

getPixel(canvasResolution, false);

resetButton.addEventListener("click", resetCanvas);

function resetCanvas() {                                        // Output : Ask for New Resolution and Create new Canvas
    newPixelCount = prompt("Specify the New Canvas Resolution", "");
    return getPixel(newPixelCount, true);
} 

function colorRandomize() {                                     // Output : Give Random RGB Value
    randomColor = Math.floor(Math.random() * 255);
    return randomColor;
}

function getPixel(pixelCount, reset) {                         // Output : Square Container populated with square boxes
    
    canvasResolution = pixelCount;
    let opacityValue = 0.1;

    if (reset === true) {
        sketchContainer.remove();
        sketchContainer = document.createElement("div");
        sketchContainer.setAttribute("class", "containerCss");
        bodyContainer.appendChild(sketchContainer);
    }

    for (i=0; i<(pixelCount * pixelCount) ; i++) {
        const pixel = document.createElement("div");
        pixel.classList.toggle("pixel");
        pixel.setAttribute("class", "pixelCss");

        pixel.style.width = `${600/pixelCount}px`;
        pixel.style.height = `${600/pixelCount}px`;

        pixel.addEventListener("mouseenter", () => {
            pixel.style.backgroundColor = `black`;
            pixel.style.opacity = opacityValue;
            opacityValue += 0.1;
        });
            
        sketchContainer.appendChild(pixel);
}
    resetButton.textContent = `The current Canvas Resolution is ${canvasResolution} x ${canvasResolution}.
    You can change it by pressing this button`;
}

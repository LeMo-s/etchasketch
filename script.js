const container = document.querySelector(".container")

const buttonContainer = document.createElement('div')

const button = document.createElement("button")
button.textContent = 'Generate a new grid'
button.addEventListener('click', () => generateGrid())
buttonContainer.appendChild(button)

document.body.insertBefore(buttonContainer, container)

function generateGrid() {
    eraseGrid();
    let numSquaresPerSide = askNumOfSquarePerSides();
    const sideLength = 960 / numSquaresPerSide ;
    for (let i=0; i < numSquaresPerSide * numSquaresPerSide; i++) {
        const pixel = document.createElement('div')
        pixel.setAttribute('style', `width: ${sideLength}px; height: ${sideLength}px`)
        pixel.classList.add("pixel")
        container.appendChild(pixel)
        pixel.addEventListener('mouseenter', () => (pixel.style.opacity = changeOpacity(window.getComputedStyle(pixel).getPropertyValue('opacity'))))
        
    }
}

function changeOpacity(pixelOpacity) {
    let opacity = parseFloat(pixelOpacity)
    if (opacity == 1.0) {
        console.log(opacity)
        console.log(typeof opacity)
        return 1
    } else {
        console.log(opacity)
        console.log(typeof opacity)
        return (opacity += 0.1)
    }
}

function eraseGrid() {
    container.innerHTML = '';
}

function askNumOfSquarePerSides() {
    let number = parseInt(prompt("How many number of square do you want per side ?"));
    if (number > 100)  {
        askNumOfSquarePerSides();
    } 
    return number
}
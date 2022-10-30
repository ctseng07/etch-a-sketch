const rows = 16;
let defaultColor = '#363636';
let defaultMode = 'color';

/////////////////////////////////////////////////////////////
//*Query Selectors*//
//Grid Box
const gridBox = document.querySelector("#grid");
let slider = document.querySelector("#sizeSlider")
let output = document.querySelector("#sizeValue");

/////////////////////////////////////////////////////////////
//Color Selectors
let colorPicker = document.querySelector("#colorPicker");
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");

//Reset
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#clear");

/////////////////////////////////////////////////////////////
//*Default Grid*//
function gridSetUp(size) {
    for (let i = 0; i < size * size; i++) {
        let grid = document.createElement("div");
        grid.classList.add('square');
        grid.style.backgroundColor = 'white';
        gridBox.appendChild(grid);
    }
    gridBox.style.gridTemplateColumns = `repeat(${size}, auto)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, auto)`;
};

gridSetUp(rows);


//color-picker button
// function setCurrentColor(newColor) {
//     currentColor = newColor
// }
// colorPicker.oninput = (e) => setCurrentColor(e.target.value);
// console.log(newColor);
// function updateSizeValue(value) {
//     output.innerHTML = `${value} x ${value}`
// }

/////////////////////////////////////////////////////////////
//*Color Button Settings*//
//Default Color
grid.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = defaultColor;
});
grid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = defaultColor;
});

//Color Picker*//

//Black button
black.addEventListener("click", () => {
    defaultColor = "#363636"
});

//Rainbow Button
rainbow.addEventListener("click", (e) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    defaultColor = `rgb(${r}, ${g}, ${b})`
});
//////////////////////////////////////////////////////
//*Reset Button Settings*//
//Eraser Button
eraser.addEventListener("click", () => {
    defaultColor = "white"
});

//Clear Button
const clearGrid = document.querySelectorAll('.square');
reset.addEventListener('click', () => {
    clearGrid.forEach(element => {
        element.style.backgroundColor = "white";
    })
});
//////////////////////////////////////////////////////////////
//*Slider Button*// figure out how change display from single digit to 16 x 16 
// slider.onmousemove = (e) => updateSizeValue(e.target.value);
// slider.onchange = (e) => changeSize(e.target.value);

// function changeSize(value) {
//     setCurrentsize(value);
//     updateSizeValue(value);
// }

// function updateSizeValue(value) {
//     output.innerHTML = `${value} x ${value}`;

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = slider.value;
};

//////////////////////////////////////////////////////////////
//**not used **//
// function randomColor() {
//     let generateColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     return generateColor;
// }
// function setCurrentsize(newsize) {
//     currentSize = newsize
// }

// function changeSize(value) {
//     setCurrentsize(value)
//     updateSizeValue(value)
// }

// document.body.addEventListener('mousedown', (this) => {
//     this.mouse = true;
// });

// document.body.addEventListener('mouseup', (this) => {
//     this.mouse = false;
// });

//Rainbow Button
// function setCurrentMode(newMode) {
//     currentMode = newMode
// }
// rainbow.onclick = () => setCurrentMode('rainbow')

// function changeColor(e) {
//     if (e.type === "mouseover" && !mouseDown) return
//     if (currentMode === "rainbow") {
//         const r = Math.floor(Math.random() * 256)
//         const g = Math.floor(Math.random() * 256)
//         const b = Math.floor(Math.random() * 256)
//         e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//     } else if (currentMode === 'color') {
//         e.target.style.backgroundColor = currentColor
//     } else if (currentMode === 'eraser') {
//         e.target.style.backgroundColor = "white"
//     }
//     console.log(e);
// }

//color-picker button
// function setCurrentColor(newColor) {
//     currentColor = newColor
// }
// colorPicker.oninput = (e) => setCurrentColor(e.target.value);
// console.log(newColor);
// function updateSizeValue(value) {
//     output.innerHTML = `${value} x ${value}`


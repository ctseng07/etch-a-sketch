const rows = 16;
let defaultColor = '#363636';
let defaultMode = 'color';
mouse = false;

let currentSize = rows;
let currentColor = defaultColor;
let currentMode = defaultMode;


//grid-box
const gridBox = document.querySelector("#grid");
let slider = document.querySelector("#sizeSlider")
let output = document.querySelector("#sizeValue");


//color selectors
let colorPicker = document.querySelector("#colorPicker");
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");

//reset
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#clear")


//grid set up
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

// const grids = document.querySelectorAll('.square')
// grids.forEach(element => {
//     element.addEventListener('mouseover', (e) => {
//         e.target.style.backgroundColor = randomColor();
//         // console.log(e);
//     })
// });

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



// //default color pick
grid.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = defaultColor;
});
grid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = defaultColor;
});


//color-picker button
function setCurrentColor(newColor) {
    currentColor = newColor
}
colorPicker.oninput = (e) => setCurrentColor(e.target.value);


//rainbow button



function updateSizeValue(value) {
    output.innerHTML = `${value} x ${value}`
}
//////////////////////////////////////////////////////////////
//Slider button
// output.innerHTML = slider.value;

// slider.oninput = function () {
//     output.innerHTML = this.value;
// }
/////////////////////////////////////////////////////////////
//Color Button Settings
//Color button

//Black button
black.addEventListener("click", () => {
    defaultColor = "#363636"
});

//Rainbow Button

/////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////
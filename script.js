let defaultSize = 16;
let defaultColor = '#363636';
let defaultMode = 'color';
let state = "";

/////////////////////////////////////////////////////////////
//*Query Selectors*//
//Grid Box
const gridBox = document.querySelector("#grid");
let sizeSlider = document.querySelector("#sizeSlider")
let sizeValue = document.querySelector("#sizeValue");

//Color Selectors
let colorPicker = document.querySelector("#colorPicker");
let rainbow = document.querySelector("#rainbow");

//Reset
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#clear");

/////////////////////////////////////////////////////////////
//*Default Grid*//
function gridSetUp(size) {
    for (let i = 0; i < size * size; i++) {
        let grid = document.createElement("div");
        grid.classList.add('square');
        grid.style.backgroundColor = "white";
        gridBox.appendChild(grid);
    }

    gridBox.style.gridTemplateColumns = `repeat(${size}, auto)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, auto)`;
};
gridSetUp(defaultSize);

//Grid Change
function changeSize(value) {
    defaultSize = value;
    sizeSlider.addEventListener('input', (e) => {
        updateSizeValue(e.target.value)
    });
    reloadGrid();

};
function reloadGrid() {
    gridChange();
    gridSetUp(defaultSize);
};

function gridChange() {
    grid.textContent = '';
}
function updateSizeValue(value) {
    sizeValue.textContent = `${value} x ${value}`
}

sizeSlider.addEventListener("change", (e) => {
    changeSize(e.target.value);
});

/////////////////////////////////////////////////////////////
//*Color Button Settings*//
//Default Color
grid.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = defaultColor;
});
grid.addEventListener("mouseover", (event) => {
    if (state == 'rainbow') {
        defaultColor == colorChange()
    } else if
        (state == 'color') {
        defaultColor == colorPicker
    } else {
        defaultColor == "3636336"
    }
    event.target.style.backgroundColor = defaultColor;
});

// Color Picker//
colorPicker.addEventListener("input", (newColor) => {
    defaultColor = newColor.target.value;
    state = 'color'
});

// //Rainbow Button
function colorChange() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    defaultColor = `rgb(${r}, ${g}, ${b})`;
}

rainbow.addEventListener("click", () => {
    state = 'rainbow';
});


//Eraser Button
eraser.addEventListener("click", () => {
    defaultColor = "white"
});

//Clear Button
reset.addEventListener('click', reloadGrid)
let clearGrid = document.querySelectorAll('.square');
reset.addEventListener('click', () => {
    clearGrid.forEach(element => {
        element.style.backgroundColor = "white";
    })
});
///////////////////////////////////////////////////////////////////

// let defaultSize = 16;
// let defaultColor = '#363636';
// let defaultMode = 'color';

// let currentSize = defaultSize;
// let currentColor = defaultColor;
// let currentMode = defaultMode;

// function setCurrentColor(newColor) {
//     currentColor = newColor
// }

// function setCurrentMode(newMode) {
//     // activateButton(newMode)
//     currentMode = newMode
// }

// function setCurrentSize(newsize) {
//     currentSize = newsize
// }

// /////////////////////////////////////////////////////////////
// //*Query Selectors*//
// //Grid Box
// const gridBox = document.querySelector("#grid");
// let sliderSlider = document.querySelector("#sizeSlider")
// let sizeValue = document.querySelector("#sizeValue");

// /////////////////////////////////////////////////////////////
// //Color Selectors
// let colorPicker = document.querySelector("#colorPicker");
// const color = document.querySelector("#color");
// const rainbow = document.querySelector("#rainbow");

// //Reset
// const eraser = document.querySelector("#eraser");
// const reset = document.querySelector("#clear");

// /////////////////////////////////////////////////////////////

// colorPicker.oninput = (e) => setCurrentColor(e.target.value);
// color.onclick = () => setCurrentMode('color');
// rainbow.onclick = () => setCurrentMode('rainbow');
// eraser.onclick = () => setCurrentMode('eraser');
// clear.onclick = () => reloadGrid()
// sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
// sizeSlider.onchange = (e) => changeSize(e.target.value);

// let mouseDown = false;
// document.body.onmousedown = () => (mouseDown = true);
// document.body.onmouseup = () => (mouseDown = false);

// function changeSize(value) {
//     setCurrentSize(value);
//     updateSizeValue(value);
//     reloadGrid()
// };

// function updateSizeValue(value) {
//     sizeValue.textContent = `${value} x ${value}`;
// }

// function reloadGrid() {
//     clearGrid()
//     gridSetUp(currentSize);
// }

// function clearGrid() {
//     gridBox.textContent = "";
// }

// /////////////////////////////////////////////////////////////
// //*Default Grid*//
// function gridSetUp(size) {
//     for (let i = 0; i < size ** 2; i++) {
//         let grid = document.createElement("div");
//         grid.classList.add('square');
//         grid.addEventListener('mousedown', changeColor);
//         grid.addEventListener('mouseover', changeColor);
//         gridBox.appendChild(grid);
//     }
//     gridBox.style.gridTemplateColumns = `repeat(${size}, auto)`;
//     gridBox.style.gridTemplateRows = `repeat(${size}, auto)`;
// };

// gridSetUp(defaultSize);

// ////////////////////////////////////////////////////////////

// //Color button
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
//     };
// };

// // function activateButton(newMode) {
// //     if (currentMode === "rainbow") {
// //         rainbow.classList.remove('active')
// //     } else if (currentMode === 'color') {
// //         color.classList.remove('active')
// //     } else if (currentMode === 'eraser') {
// //         eraser.classList.remove('active')
// //     }

// //     if (newMode === "rainbow") {
// //         rainbow.classList.add('active')
// //     } else if (newMode === 'color') {
// //         color.classList.add('active')
// //     } else if (newMode === 'eraser') {
// //         eraser.classList.add('active')
// //     }
// // }

// window.onload = () => {
//     gridSetUp(defaultSize)
// }
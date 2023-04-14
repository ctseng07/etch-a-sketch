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
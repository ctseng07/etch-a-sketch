const defaultGrid = 16;
const defaultColor = 'black';


//grid-box
const gridBox = document.querySelector("#grid");


//color selectors
const color = document.querySelector("#color-picker");
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");

//reset
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#clear");


//grid set up
function gridSetUp(size) {
    for (let i = 0; i < size ** 2; i++) {
        let grid = document.createElement("div");
        grid.classList.add('square');
        grid.style.backgroundColor = 'white';
        gridBox.appendChild(grid);
    }
    gridBox.style.gridTemplateColumns = `repeat(16, auto)`;
    gridBox.style.gridTemplateRows = `repeat(16, auto)`;
}

gridSetUp(defaultGrid)

//default color pick
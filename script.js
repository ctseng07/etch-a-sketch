const defaultGrid = 16;
let defaultColor = '#363636';


//grid-box
const gridBox = document.querySelector("#grid");


//color selectors
const color = document.querySelector(".color-picker");
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");

//reset
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#clear")


//grid set up
function gridSetUp(size) {
    for (let i = 0; i < size ** 2; i++) {
        let grid = document.createElement("div");
        grid.classList.add('square');
        grid.style.backgroundColor = 'white';
        gridBox.appendChild(grid);
    }
    console.log(size);
    gridBox.style.gridTemplateColumns = `repeat(${size}, auto)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, auto)`;
}

gridSetUp(defaultGrid)

//default color pick
// grid.addEventListener("mousedown", (event) => {
//     event.target.style.backgroundColor = "defaultColor";
// });
grid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = defaultColor;
});

//default color
black.addEventListener("click", () => {
    defaultColor = "#363636"
});

//eraser button
eraser.addEventListener("click", () => {
    defaultColor = "white"
});

//color-picker button
color.addEventListener("click", () => {
    defaultColor = ""
});
//clear button
function refreshPage() {
    window.location.reload(true);
}
reset.addEventListener('click', refreshPage);

//grid-box
let grid = document.querySelector(".grid-box");


//color selectors
let color = document.querySelector("#color-pick");
let black = document.querySelector("#black");
let rainbow = document.querySelector("#rainbow");

//reset
let eraser = document.querySelector("#eraser");
let reset = document.querySelector("#clear");

function refreshPage() {
    window.location.reload(true);
}
reset.addEventListener('click', refreshPage);


function gridSetUp(size) {
    grid.getElementsByClassName.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.getElementsByClassName.gridTemplateRows = `repeat(${size}, 1fr)`
}
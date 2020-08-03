let root = document.documentElement;;
let gridDiv = document.querySelector('#grid');
let clearButton = document.querySelector('#clear');
let resizeButton = document.querySelector('#resize');
let colorize = document.querySelector('#colorize');
let boxColor = getComputedStyle(root).getPropertyValue('--bg-box');
let boxBg = getCurrentColor();

createGrid();
loadListeners();

function createGrid() {
    let num = getComputedStyle(root).getPropertyValue('--num-boxes');
    for(let i = 0; i < num * num; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        gridDiv.appendChild(box);
    }
}

function loadListeners() {
    getBoxes().forEach(box => box.addEventListener('mouseover' , changeBackground));
    clearButton.addEventListener('click', clearGrid);
    resizeButton.addEventListener('click', resizeGrid);
}

function getCurrentColor() {
    return colorize.value;
}

function changeBackground(e) {
    e.srcElement.style.backgroundColor = getCurrentColor();
}

function clearGrid() {
    getBoxes().forEach(box => box.style.backgroundColor = boxColor);
}

function resizeGrid() {
    let size = +prompt('Enter a value from 2 to 100:');
    if(size <= 1 || size > 100 || isNaN(size)) resizeGrid();
    root.style.setProperty('--num-boxes', size);
    removeGrid();
    createGrid();
    loadListeners();
}

function removeGrid() {
    document.querySelectorAll('.box').forEach(b => b.remove());
}

function getBoxes() {
    return document.querySelectorAll('.box');
}
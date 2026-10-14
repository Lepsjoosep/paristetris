let game = document.getElementById("game");
const ctx = game.getContext("2d");

let lose = false;

function drawGrid(lineWidth, cellWidth, cellHeight, color) {

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    
    let width = game.width;
    let height = game.height;

    for (let x = 0; x <= width; x += cellWidth) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    for(let y = 0; y <= height; y += cellHeight) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

drawGrid(1, 40, 40, '#726d6d');


let I = { color: "green", boxes: [[0,0], [1,0], [2,0], [3,0]]};
let O = { color: "red", boxes: [[0,0], [1,0], [0,1], [1,1]]};
let T = { color: "yellow", boxes: [[0,0], [1,0], [2,0], [1,1]]};
let J = { color: "blue", boxes: [[0,0], [0,1], [1,1], [2,1]]};
let L = { color: "purple", boxes: [[2,0], [0,1], [1,1], [2,1]]};
let S = { color: "pink", boxes: [[0,1], [1,1], [1,0], [2,0]]};
let Z = { color: "orange", boxes: [[0,0], [1,0], [1,1], [2,1]]};

let shapes = [I, O, T, J, L, S, Z];

let randomizer = shapes[Math.floor(Math.random() * shapes.length)]

function tick() {

}

function createShape (shape, x, y, color) {
    ctx.fillStyle = color;
    for (let i = 0; i < shape.boxes.length; i++) {
        let col = ___; 
        let row = ___;
        ctx.fillRect(___, ___, 40, 40);
    }
}

CreateShape(randomizer, 0, 0, color);
let timer = setInterval(tick, 500);
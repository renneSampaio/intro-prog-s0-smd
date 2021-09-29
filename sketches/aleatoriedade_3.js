let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);

  x = width/2.0;
  y = height/2.0 + 10;
}

function draw() {
  rect(x, y, 10);

  let nx = 15 * (noise(x) * 2.0 - 1.0);
  let ny = 15 * (noise(y) * 2.0 - 1.0);
  
  x += nx;
  y += ny;
}
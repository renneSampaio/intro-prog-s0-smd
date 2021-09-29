let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);

  x = width/2.0;
  y = height/2.0;
}

function draw() {
  rect(x, y, 10);
  x += random(-10, 10);
  y += random(-10, 10);
}
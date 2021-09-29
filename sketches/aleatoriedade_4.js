let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      rect(x, y, noise(x, y) * 10)
    }
  }
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (let i = 0; i < mouseX; i++) {
    rect(4 * i, 4 * i, 10 * i);
  }
}
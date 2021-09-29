function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  let i = 0;
  while (i < mouseX) {
    rect(4 * i, 4 * i, 10 * i);
    i += 1;
  }
}
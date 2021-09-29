function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (let i = 0; i < width; i++) {
    let x = i;
    let y = height/2 + sin(i/10.0) * 40;
    rect(x, y, 10, 10)
  }
}
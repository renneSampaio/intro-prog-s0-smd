function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (let i = 0; i < width; i++) {
    let x = i;

    let amplitude = mouseY;
    let frequencia = 10;

    let n = noise(x) * amplitude;

    let y = height/2 + n;
    rect(x, y, 10, 10)
  }
}
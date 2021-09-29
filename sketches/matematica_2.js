function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (let i = 0; i < width; i++) {
    let x = i;

    let amplitude = mouseY;
    let frequencia = 10;

    let y = height/2 + sin(i/frequencia) * amplitude;
    rect(x, y, 10, 10)

    let t = millis()/1000;

    let dx = sin(t) * 10.0;

    rect(x + dx, y, 10, 10)
    //rect(x, y, 10, 10)
  }
}
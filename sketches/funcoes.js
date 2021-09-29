
function setup() {
  createCanvas(400, 400);
}

function draw() {
  desenharFigura(30);
}

function desenharFigura(tamanho) {
  rect(40, 40, tamanho)
  circle(40, 40, tamanho)
}
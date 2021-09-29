// Esta variável está em escopo global
let tamanho = 40

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  desenharFigura(mouseX, mouseY, 100);
  desenharFigura(mouseX, mouseY, 70);
  desenharFigura(mouseX, mouseY, 50);
}

function desenharFigura(x, y, tamanho) {
  // O tamanho usado dentro desta função é o
  // tamanho recebido como argumento
  rect(x, y, tamanho)
  circle(x, y, tamanho)
}
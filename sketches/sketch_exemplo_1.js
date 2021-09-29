function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  // As variáveis mouseX e mouseY contém
  // a posição do mouse nos eixos x e y.
  ellipse(mouseX, mouseY, 20, 20);
  
  //rect(mouseX, mouseY, 20, 20);
  
  //circle(mouseX, mouseY, 20);

  // Mais exemplos: https://p5js.org/examples/form-shape-primitives.html
}
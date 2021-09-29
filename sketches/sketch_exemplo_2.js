function setup() {
  createCanvas(300, 300);
}

function draw() {
  //background(237, 201, 255)
  let px = mouseX;
  let py = mouseY;

  //noStroke();
  //noFill()

  // A função stroke controla a cor da borda
  // A função controla o preenchimento.
  // Ambas aceitam valores similares
  // a função background

  //fill(254, 212, 231);
  stroke(254, 212, 231);
  ellipse(mouseX, mouseY + 10, 10, 10);
  stroke(242, 183, 159);
  ellipse(mouseX, mouseY - 10, 10, 10);
  stroke(229, 183, 105);
  ellipse(mouseX + 10, mouseY, 10, 10);
  stroke(216, 204, 52);
  ellipse(mouseX - 10, mouseY, 10, 10);
}
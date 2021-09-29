function setup() {
  createCanvas(300, 300);
}

function draw() {
  // background(255)
  let px = mouseX;
  let py = mouseY;

  ellipse(mouseX, mouseY + 10, 10, 10);
  ellipse(mouseX, mouseY - 10, 10, 10);
  ellipse(mouseX + 10, mouseY, 10, 10);
  ellipse(mouseX - 10, mouseY, 10, 10);
}

// Esta função é chamada sempre 
// que algum botão do mouse é pressionado.
function mousePressed() {
  background(255);
}

// Esta função é chamada sempre que alguma
// tecla é pressionada
function keyTyped() {
  if (key === 's') {

    // Salva o canvas
    save("sketch.png");
  }
}
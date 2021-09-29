function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  // Quando a condição dentro dos parenteses
  // é verdadeira, o primeiro bloco de código é
  // executado
  if (mouseX < width/2) {
    background(255);
    
  // Senão...
  } else {
    background(0);
  }
}
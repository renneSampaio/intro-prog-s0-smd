function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(255);

  if (mouseX < width/2) {
    rect(mouseX, mouseY, 100);
    
  // O senão pode ter mais condições
  } else if (mouseY > height/2){
    circle(mouseX, mouseY, 50);
  }
}
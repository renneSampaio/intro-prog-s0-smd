// A função setup é executada uma vez.
// Pode ser usada para inicialização e
// configuração
function setup() {
  // Cria uma área de desenho
  // com 400px de altura e
  // 400px de largura
  createCanvas(400, 400);
}

// A função draw é executada a cada frame
function draw() {
  // Pinta o canvas com a cor especificada
  // sendo 0 - preto, 255 - branco
  background(255);
  
  // Ela também aceita 3 valores RGB
  // cada um indo de 0 até 255
  //background(20, 140, 240);
  
  // Existem vários outros modos para esta função. 
  // Para ver todos eles, acesse a referencia do P5:
  // https://p5js.org/reference/#/p5/background
}
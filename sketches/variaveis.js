// Uma variável é um nome dado a um valor
// Na linha abaixo, a variável diametro é declarada e definida:
let diametro = 40;

// Uma variável pode ser declarada
// sem ser definida;
let cor;


function setup() {
  createCanvas(400, 400);
  
  // A variável cor precisa ser definida na função setup pois
  // a função color não está disponível fora das funções padrão do P5.
  cor = color(25, 50, 140);
}

function draw() {
  //background(255);

  rect(
    mouseX - diametro/2,
    mouseY - diametro/2,
    diametro
  );
  
  let novo_diametro = mouseX/20;
  circle(mouseX, mouseY, novo_diametro);
}

function mousePressed() {
  background(255);
  stroke(cor);
}
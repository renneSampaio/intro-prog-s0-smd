let n_walkers = 500
walkers = [];

let noise_scale = 100;
let noise_amplitude = 1.5;
let noise_seed = 0.0;

class Walker {
  constructor(x, y, seed) {
    this.x = x;
    this.y = y;
    this.direction = 0;
    this.seed = seed;

    this.prev_x = x;
    this.prev_y = y;
  }

  update() {
    let dx = Math.cos(this.direction);
    let dy = Math.sin(this.direction);

    this.direction += (
      (noise(
        this.x / noise_scale + noise_seed,
        this.y / noise_scale + noise_seed) - 0.5) * 2.0)
      * noise_amplitude;

    this.prev_x = this.x;
    this.prev_y = this.y;

    this.x += dx * 10;
    this.y += dy * 10;

    if (this.x > width) {
      this.x = this.prev_x = 0;
    }
    if (this.y > height) {
      this.y = this.prev_y = 0;
    }
    if (this.x < 0) {
      this.x = this.prev_x = width;
    }
    if (this.y < 0) {
      this.y = this.prev_y = height;
    }
  }

  draw() {
    point(this.x, this.y)
    // line(this.prev_x, this.prev_y, this.x, this.y)
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < n_walkers; i++) {
    walkers.push(new Walker(0, i * height / n_walkers, i))
  }
}

function draw() {
  background(255, 5)

  // noise_scale = mouseY/height * 1000;
  noise_seed = mouseX / width * 100;

  for (let i = 0; i < n_walkers; i++) {
    walkers[i].update();
  }
  for (let i = 0; i < n_walkers; i++) {
    walkers[i].draw();
  }
}
let player;

function setup() {
  createCanvas(500, 670);
  player = new Character();
}

function draw() {
  background(255);

  player.move();
  player.draw();
}

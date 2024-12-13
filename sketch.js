let player;

// game environment
function setup() {
  createCanvas(500, 670);
  player = new Character();
}

function draw() {
  background(255);

  // blue ground
  fill(0, 100, 225);
  rect(0, height - 20, width, 20);

  // movement and game mechanics
  player.move();
  player.applyGravity();
  player.draw();
}

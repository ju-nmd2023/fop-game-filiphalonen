let player;
let platform;

// game environment
function setup() {
  createCanvas(500, 670);
  player = new Character();
  platform = new Platform();
}

function draw() {
  background(255);

  // blue ground
  fill(0, 100, 225);
  rect(0, height - 20, width, 20);

  // movement and game mechanics
  platform.move();
  platform.draw();

  player.move();
  player.applyGravity();
  player.draw();
}

let player;
let platforms = [];

// game environment
function setup() {
  createCanvas(550, 700);
  player = new Character();

  // loop for platforms
  for (let i = 0; i < 5; i++) {
    let x = random(width - 100);
    let y = height - i * 150;
    platforms.push(new Platform(x, y));
  }
}

function draw() {
  background(255);

  // blue ground
  fill(0, 100, 225);
  rect(0, height - 20, width, 20);

  // movement and game mechanics
  for (let platform of platforms) {
    platform.move();
    platform.draw();
  }

  player.move();
  player.applyGravity();
  player.draw();
}

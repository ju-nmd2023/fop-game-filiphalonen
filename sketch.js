let player;
let platforms = [];

// game environment
function setup() {
  createCanvas(550, 700);
  player = new Character();

  // loop for random platforms
  for (let i = 0; i < 5; i++) {
    let x = random(width - 100);
    let y = height - i * 150;
    let type = random(["stationary", "moving", "breaking"]);
    platforms.push(new Platform(x, y, type));
  }
}

function draw() {
  background(255);

  // blue ground
  fill(0, 100, 225);
  rect(0, height - 20, width, 20);

  // move and draw platforms
  for (let platform of platforms) {
    platform.move();
    platform.draw();
  }

  // check for platform collision
  checkPlatforms();

  // player movement
  player.move();
  player.applyGravity();
  player.draw();
}

// platform mechanics
function checkPlatforms() {
  for (let i = 0; i < platforms.length; i++) {
    let platform = platforms[i];

    // conditions to land on platforms
    if (
      player.y + player.height >= platform.y &&
      player.y <= platform.y + platform.height &&
      player.x + player.width > platform.x &&
      player.x < platform.x + platform.width &&
      player.velocityY > 0
    ) {
      player.velocityY = player.jumpStrength;

      // remove breaking platforms
      if (platform.type === "breaking") {
        platforms.splice(i, 1);
      }
    }
  }
}

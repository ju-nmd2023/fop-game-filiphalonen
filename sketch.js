let platformSpacing = 150;
let gameState = "start";

// game environment
function setup() {
  createCanvas(550, 700);
}

function draw() {
  // start screen
  if (gameState === "start") {
    background(0);
    fill(0, 200, 0);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Welcome to Arcade Doodle Jump", width / 2, height / 2 - 120);
    fill(255);
    textSize(20);
    text(
      "Work your way up, but beware the red platforms!",
      width / 2,
      height / 2 - 30
    );
    text("Use the left and right arrow keys to move", width / 2, height / 2);
    text("Press ENTER to start", width / 2, height / 2 + 80);
  }
  // gameplay screen
  else if (gameState === "playing") {
    background(0);

    // display score while playing
    fill(0, 255, 0);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Score: " + score, 10, 10);

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

    // The following 7 lines of code was adapted from https://chatgpt.com/share/676888c8-70f8-8000-a76e-e58a91c788ce Accessed: 2023-12-22
    // scroll platforms at certain height
    let scrolling = height / 3;
    if (player.y < scrolling) {
      let scrollAmount = scrolling - player.y;
      player.y = scrolling;

      // increase score based on scrolling
      score += Math.round(scrollAmount);

      // move platforms downward
      for (let platform of platforms) {
        platform.y += scrollAmount;
      }

      // remove platforms that are off-screen
      platforms = platforms.filter((platform) => platform.y <= height);

      while (platforms.length < 5) {
        let x = random(width - 150);
        // The following line of code was adapted from https://chatgpt.com/share/676c0dfa-8418-8000-8206-3e633acd24bf Accessed: 2023-12-25
        let y = platforms[platforms.length - 1]?.y - platformSpacing;
        let type = random(["stationary", "moving", "breaking"]);
        platforms.push(new Platform(x, y, type));
      }
    }

    // check for game over
    if (player.y > height) {
      gameState = "result";
    }
  }
  // result screen
  else if (gameState === "result") {
    background(0);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Game Over!", width / 2, height / 2 - 50);
    fill(0, 255, 0);
    textSize(20);
    text("Score: " + score, width / 2, height / 2);
    fill(255);
    text("Press ENTER to play again", width / 2, height / 2 + 50);
  }
}

// start and restart the game
function keyPressed() {
  if (keyCode === ENTER && (gameState === "start" || gameState === "result")) {
    gameState = "playing";
    score = 0;
    player = new Character();
    platforms = [];
    for (let i = 0; i < 5; i++) {
      let x = random(width - 100);
      let y = height - 150 - i * 150;
      let type = random(["stationary", "moving", "breaking"]);
      platforms.push(new Platform(x, y, type));
      platforms.push(new Platform(225, 680, "stationary"));
    }
  }
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

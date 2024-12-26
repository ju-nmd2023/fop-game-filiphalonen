class Character {
  constructor() {
    this.x = 250;
    this.y = 600;
    this.width = 30;
    this.height = 30;
    this.velocityY = 0;
    this.gravity = 1;
    this.jumpStrength = -26;
  }

  // left and right movement with arrow keys
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 8;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 8;
    }
  }
  // gravity
  applyGravity() {
    this.velocityY += this.gravity;
    this.y += this.velocityY;
  }

  // draw character as green rectangle
  draw() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}

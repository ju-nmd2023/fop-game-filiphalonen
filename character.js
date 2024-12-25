class Character {
  constructor() {
    this.x = 250;
    this.y = 300;
    this.width = 30;
    this.height = 30;
    this.velocityY = 0;
    this.gravity = 1;
    this.jumpStrength = -26;
    this.isOnGround = false;
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

    // ground check
    if (this.y >= height - this.height) {
      this.y = height - this.height;
      this.isOnGround = true;
      this.autoJump();
    }
  }

  // jump when character hits ground
  autoJump() {
    if (this.isOnGround) {
      this.velocityY = this.jumpStrength;
      this.isOnGround = false;
    }
  }

  // draw character as green rectangle
  draw() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}

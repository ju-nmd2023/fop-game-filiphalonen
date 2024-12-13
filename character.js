class Character {
  constructor() {
    this.x = 250;
    this.y = 600;
    this.width = 40;
    this.height = 40;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
  }

  draw() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}

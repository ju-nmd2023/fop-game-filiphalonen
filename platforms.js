class Platform {
  constructor() {
    this.x = 200;
    this.y = 400;
    this.width = 100;
    this.height = 10;
    this.speed = 2;
    this.direction = 1;
  }

  // platform moving right and switches to the left when hitting the border, vice-versa
  move() {
    this.x += this.speed * this.direction;
    if (this.x <= 0 || this.x + this.width >= width) {
      this.direction *= -1;
    }
  }

  // draw platform as green ish rectangle
  draw() {
    fill(0, 200, 120);
    rect(this.x, this.y, this.width, this.height);
  }
}

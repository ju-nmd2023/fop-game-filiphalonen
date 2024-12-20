class Platform {
  constructor(x, y, width = 100, height = 10, speed = 2) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
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

class Platform {
  constructor(x, y, type = "stationary", width = 100, height = 10, speed = 2) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.direction = 1;
    this.type = type;
  }

  // moving platforms switch direction when hitting the border
  move() {
    if (this.type === "moving") {
      this.x += this.speed * this.direction;
      if (this.x <= 0 || this.x + this.width >= width) {
        this.direction *= -1;
      }
    }
  }

  // draw the platforms based on type
  draw() {
    if (this.type === "breaking") {
      fill(200, 0, 0);
    } else if (this.type === "moving") {
      fill(0, 200, 120);
    } else {
      fill(0, 100, 255);
    }
    rect(this.x, this.y, this.width, this.height);
  }
}

let x = 10;
let y = 10;
let xSpeed = 4;
let ySpeed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke();
  circle(x, y, 100);

  x += xSpeed;
  y += ySpeed;

  if (x > width || x < 0) {
    xSpeed *= -1;
  }

  if (y > height || y < 0) {
    ySpeed *= -1;
  }
}

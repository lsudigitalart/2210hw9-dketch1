var rocket1;
var rocket2;
var rocket3;

function setup() {
  createCanvas(220, 480);
  background(40);
  circle1 = new Circle(width * .16, height/1, 50);
  circle2 = new Circle(width * .50, height/1, 50);
  circle3 = new Circle(width * .84, height/1, 50);
}

function draw() {
  circle1.move();
  circle1.display();
  circle2.move();
  circle2.display();
  circle3.move();
  circle3.display();
  rectMode(CENTER);

  push();
  {
    noStroke();
    fill(280, 20, 50);
    rect(0, 25, 480, 10)
  }
  pop();
  push();
  textFont("Arial")
  textAlign(CENTER);
  textSize(20);
  fill(280, 20, 50);
  text("FINISH", width/2, 18);
  pop();
}

function Circle(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = random(.6,3);


this.move = function() {
this.x += random(this.speed, -this.speed);
this.y += random(-this.speed, -this.speed);
  };

this.display = function() {
  ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

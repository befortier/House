var xAngle, zAngle, vector, xCam, zCam, cameraZ, fov, angle, house;
let wood;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  vector = createVector(0, 0, 0);

  //Camera and Perspective stuff:
  xCam = 0;
  zCam = 0;
  xAngle = 0;
  zAngle = 0;
  xMouseDif = 0;
  yMouseDif = 0;
  cameraZ = (height / 2.0) / tan(PI * 60.0 / 360.0);
  angle = 0;
  house = new House(400, 200, 2, 2)

}

function draw() {
  background(50);
  //Camera and Perspective:
  fov = PI / 3.0 + xCam;
  if (fov <= 0) {}
  camera(0, 0, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);

  translate(-1 * (mouseX - width / 2), -1 * (mouseY - height / 2));

  rotateX(-PI / 6);
  rotateX(-angle);

  //Builds the green grass floor
  // push();
  // rotateX(PI / 2);
  // fill(96, 128, 56);
  // translate(0, 0, 0);
  // plane(1000, 1000)
  // pop();
  angle += .01
  house.build();
  checkPosition();

}

//Function used to adjust camera and perspective based on keys pressed
function checkPosition() {
  if (mouseIsPressed) {
    angle -= .01;
  }
  if (keyIsDown(LEFT_ARROW)) {
    zCam -= 10;
  }
  if (keyIsDown(UP_ARROW)) {
    xCam -= .10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    zCam += 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    xCam += .10;
  }
  if (keyIsDown('65')) {
    xAngle -= 10;
  }
  if (keyIsDown('87')) {
    zAngle -= 10;
  }
  if (keyIsDown('68')) {
    xAngle += 10;
  }
  if (keyIsDown('83')) {
    zAngle += 10;
  }
}
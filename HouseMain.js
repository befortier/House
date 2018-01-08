var xAngle, zAngle, vector, table, xCam, zCam, cameraZ, fov;
let wood;

function setup() {
  createCanvas(800, 500, WEBGL);
  vector = createVector(0, 0, 0);
  table = new Table();
  angle = .01;
  change = .01;
  xCam = 0;
  zCam = 0;
  xAngle = 0;
  zAngle = 0;
  xMouseDif = 0;
  yMouseDif = 0;
  cameraZ = (height / 2.0) / tan(PI * 60.0 / 360.0);


}

function draw() {

  fov = PI / 3.0 + xCam;
  if (fov <= 0) {

  }
  camera(0, 0, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  perspective(fov, width / height, cameraZ / 10.0 + zCam, cameraZ * 10.0);

  background(50);

  checkPosition();
  push();
  rotateX(PI / 2);
  fill(96, 128, 56);
  translate(0, 0, -60);
  plane(1000, 1000)
  pop();
  fill(86, 47, 14);
  table.build();
}

function checkPosition() {
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
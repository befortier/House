var cameraX = 0;
var cameraZ = 0;

function setup() {
    createCanvas(500, 500, WEBGL);
}

function draw() {
    background(51);
    normalMaterial();


    // Potential rotate the camera according to the mouse position + some trig porportions
    rotateX(frameCount*.01);
    rotateY(frameCount*.01);
    rotateZ(frameCount*.01);

    checkButtons();
    translate(-1*(mouseX - width / 2) + cameraX, -1*(mouseY - height / 2), cameraZ);

    box(100, 100, 100);
}

function checkButtons() {
    if (keyIsDown(87)) {
        cameraZ += 10;
    } else if (keyIsDown(83)) {
        cameraZ -= 10;
    } else if (keyIsDown(65)) {
        cameraX += 10;
    } else if (keyIsDown(68)) {
        cameraX -= 10;
    }
}

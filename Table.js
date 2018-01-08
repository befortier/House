  function Table() {
    let x = random(200, 300);
    let y = random(200, 300);
    let z = random(200, 300);
    this.pos = createVector(x, y, z);
    this.scale = 1;

    this.build = function() {
      stroke(0);
      for (var i = 0; i < 4; i++) {
        push();
        rotateX(PI / 2);
        translate(-100 * pow(-1, i), 100 * floor(i / 2), 0);
        box(40, 40, 100);
        pop();
      }
      translate(0, -65, 60)
      box(500, 30, 200);
    }
  }
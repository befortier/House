  function Table(x, y, z, scl) {
    this.pos = createVector(x, y, z);
    this.scl = scl;

    this.build = function() {
      push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      stroke(0);
      fill(86, 47, 14);
      for (var i = 0; i < 4; i++) {
        push();
        rotateX(PI / 2);
        translate(-1 * this.scl * pow(-1, i), 1 * this.scl * floor(i / 2), 0);
        box(.4 * this.scl, .4 * this.scl, 1 * this.scl);
        pop();
      }
      translate(0 * this.scl, -.65 * this.scl, 1 * this.scl)
      box(5 * this.scl, .3 * this.scl, 2 * this.scl);
      pop();
    }
  }
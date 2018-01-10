var floors = [];

function House(height, width, scl, levels) {
  this.levels = levels;
  this.w = width;
  this.h = height;
  this.scl = scl;
  for (var i = 0; i < this.levels; i++) {
    floors.push(new Ground(this.h, this.w, this.scl));
  }


  this.build = function() {
    push();
    for (var i = 0; i < floors.length; i++) {
      floors[i].build();
      translate(0, this.h / 2 + this.h / 2, 0) //remove second this.h/2 to make it flush
    }
    pop();
  }
}
function Wall(x, y, z, height, width, depth) {
  this.pos = createVector(x, y, z)
  this.h = height;
  this.w = width;
  this.d = depth;



  this.build = function() {
    translate(this.pos.x, this.pos.y, this.pos.z);
    stroke(0);
    fill(255);
    box(this.w, this.h, this.d);


  }




}
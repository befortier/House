function Ground(height, width, scl) {
  this.h = height;
  this.w = width;
  this.scl = scl;
  //Creates table(x,y,z,scale)
  var x, y, z, table;
  var xBound = (this.h - (this.h / 6)) / 2; //Bounds the tables location to fit within the floors dimensions
  var zBound = (this.w - (this.w / 6)) / 2;
  x = random(-1 * xBound, xBound);
  y = -5 * this.scl;
  z = random(-1 * zBound, zBound);
  //Wall(left/right,up/down,back/forward)
  var wallScl = 2;
  table = new Table(x, y, z, 5 * wallScl);

  var wall = new Wall(0, 0 - this.h / (2 * wallScl), 0 - this.w / 2, this.h / wallScl, this.h, 10);
  var wall2 = new Wall(0, 0 - this.h / (2 * wallScl), 0 + this.w / 2, this.h / wallScl, this.h, 10);
  var wall3 = new Wall(this.w, 0 - this.h / (2 * wallScl), 0, this.h / wallScl, 10, this.w + 10);
  var wall4 = new Wall(-this.w, 0 - this.h / (2 * wallScl), 0, this.h / wallScl, 10, this.w + 10);



  this.build = function() {
    //    Builds the floor:
    push();
    fill(132, 115, 90);
    push()
    rotateX(PI / 2);
    stroke(0);
    plane(this.h, this.w);
    pop();
    table.build();
    wall.build();
    wall2.build();
    wall3.build();
    wall4.build();




  }







}
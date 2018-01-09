function Ground(height, width) {
  this.h = height;
  this.w = width;
  //Creates table(x,y,z,scale)
  var x, y, z, table;
  var xBound = (this.h - (this.h / 10)) / 2; //Bounds the tables location to fit within the floors dimensions
  var zBound = (this.w - (this.w / 10)) / 2;
  var tableScl = 10;
  x = random(-1 * xBound, xBound);
  y = -tableScl;
  z = random(-1 * zBound, zBound);
  //Adds a table, translates it up 60 units so its resting on the floor
  table = new Table(x, y, z, 10);
  //Wall(left/right,up/down,back/forward)
  var wallScl = 2;
  var wall = new Wall(0, 0 - this.h / (2 * wallScl), 0 - this.w / 2, this.h / wallScl, this.h, 10);
  var wall2 = new Wall(0, 0, 0 + this.w, this.h / wallScl, this.h, 10);


  this.build = function() {
    //    Builds the floor:
    fill(132, 115, 90);
    push()
    rotateX(PI / 2);
    stroke(0);
    plane(this.h, this.w);
    pop();
    push()
    table.build();
    pop()
    wall.build();
    wall2.build();





  }







}
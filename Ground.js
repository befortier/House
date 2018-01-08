function Ground(height, width) {
  this.h = height;
  this.w = width;
  //Creates table(x,y,z,scale)
  var x, y, z;
  var xBound = (height - 600) / 2; //Bounds the tables location to fit within the floors dimensions
  var zBound = (width - 1200) / 2;
  x = random(-1 * xBound, xBound);
  y = -120;
  z = random(-1 * zBound, zBound);

  table = new Table(x, y, z, 75);


  this.build = function() {
    //Builds the floor:
    fill(132, 115, 90);
    push()
    translate(0, -5, 0);
    rotateX(PI / 2);
    noStroke();
    plane(height, width);
    pop();

    //Adds a table, translates it up 120 units so its resting on the floor
    //translate(x, y, z);
    table.build();




  }







}
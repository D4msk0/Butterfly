var yoff = 0;

function setup() {
  createCanvas(600, 600);
}

function draw(){
  background(51);
  translate(width/2, height/2);
  rotate(PI/2);

  var r = 100;
  stroke(0);
  strokeWeight(1);
  fill(255, 50);
  var xoff = 0;
  var dx = 0.8;
  var da = PI/100;
  
  beginShape();
  for (var a = -PI / 2; a < PI / 2; a += da) {
    
    var n = noise(xoff, yoff);
    var r = sin(2 * a) * map(n, 0, 1, 150, 300);

    var x = r * cos(a);
    var y = r * sin(a);
    xoff += dx;
    vertex(x,y);
  }
  for (var a = PI / 2; a <= 3*PI/2; a += da) {
    
    var n = noise(xoff, yoff);
    var r = sin(2 * a) * map(n, 0, 1, 150, 300);

    var x = r * cos(a);
    var y = r * sin(a);
    xoff -= dx;
    vertex(x,y);
  }
  endShape();
  yoff += 0.01;
}

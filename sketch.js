function setup() {
  createCanvas(400, 400);
  background(220);
  colorMode(HSB)
}

function draw() {
  strokeWeight(2);
  if(mouseIsPressed && mouseX<300) {
  	//stroke(c,75,100)
   line(mouseX,mouseY,pmouseX,pmouseY)
  	}
  fill(120,230,22);

  rect(320,50,50,50);

   if(mouseIsPressed && mouseX>300) {
     stroke(120,230,22);
   }
}

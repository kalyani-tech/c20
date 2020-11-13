var a,b;
function setup() {
  createCanvas(800,400);
  a = createSprite(200,200,50,80);
  a.shapeColor = "green";
  b = createSprite(400,200,10,10);
  b.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  a.x= World.mouseX;
  a.y= World.mouseY; 
  console.log(b.x-a.x);
  if(a.x-b.x <30 && b.x - a.x < 30){
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  drawSprites();
}
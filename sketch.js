var fixedRect, movingRect;
var box1, box2, box3, box4

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(100,200);
  //adding setup stuff for the fized rectangle
  fixedRect.shapeColor="green"
  //same for the moving rectangle(look above if you cant understand)
  movingRect=createSprite(700,300);
  movingRect.shapeColor=("green");
  //giving properties to le boxes
box1=createSprite(10,50,80,80);
box1.setVelocity(3,0);
box1.shapeColor="cyan";
//box 2 time
box2=createSprite(750,50,80,80);
box2.setVelocity(-3,0);
box2.shapeColor="orange";
//box 3 times
box3=createSprite(400,0,80,80);
box3.setVelocity(0,3);
box3.shapeColor="yellow";
//box 4 time
box4=createSprite(400,400,80,80);
box4.setVelocity(0,-3);
box4.shapeColor="blue";
}

function draw() {
  background(0,0,0);
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  isTouching(movingRect, fixedRect);
  bounce(box1,box2);
  bounce(box3,box4);
  drawSprites();
}
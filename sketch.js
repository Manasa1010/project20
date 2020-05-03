var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 /* speed.random(50,90);
  wall.random(400,1500);

 car = createSprite(50, 200, 60, 50);
 wall = createSprite(1500, 200, 60, 200);
 wall.shapecolor(80,80,80);*/

}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;

  drawSprites();
}
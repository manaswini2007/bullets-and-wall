
var bullet , wall;

var speed ,thickness, weight;

function setup()
{

  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() 
{
  background(255,255,255);
  bullet.velocityX = speed;
 bullet.collide(wall);

  if(hasCollided(bullet , wall))
{
    
    bullet.velocityX = 30;
    var damage = 05 * weight * speed/(thickness*thickness*thickness);
    if(damage>10)
  {
    wall.shapeColor=color(250,0,0);
  }
  if(damage<100)
  {
    wall.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(bullet,wall)
   {
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
   }
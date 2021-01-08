var bullets
var wall,thickness
var speed,weight


function setup() {
  createCanvas(800,400);
  wall=createSprite(700, 200, thickness, height/2);
  bullets=createSprite(70, 200, 100, 10);
  speed=random(223,321)
  thickness=random(22,83)
  bullets.velocityX = speed;
  
  weight=random(400,1500)

}

function draw() {
  background(0);  

  if(hasCollided(bullets,wall)) {

    bullets.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10){
    wall.shapeColor=color(214,0,45)
    }
    
    if(damage>10){
      wall.shapeColor=color(0,1,222)
    }
    
    
    }
    
    








    hasCollided();

  drawSprites();
}



function hasCollided(){
bulletsRightEdge=bullets.x+bullets.width
wallLeftEdge=wall.x;
if(bulletsRightEdge>=wallLeftEdge){

  return true
}

return false;

}
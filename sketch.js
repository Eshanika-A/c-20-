 

 var movingRect, fixedRect;

 function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
  fixedRect= createSprite(100, 200, 50, 50);
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
//movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
//50-100<25+25
//fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2

function draw() {
  background("pink");
  movingRect.y= World.mouseY;
  movingRect.x= World.mouseX;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2 ){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else{
     movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }

  drawSprites();

}
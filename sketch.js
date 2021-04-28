


function setup() {
  createCanvas(800,400);
  ball1=createSprite(400, 200, 50, 50);
ball2=createSprite(100,100,20,80);
ball3=createSprite(150,100,120,180);
ball4=createSprite(620,100,50,140);

}

function draw() {
  background(0);  

ball2.y=World.mouseY;
ball2.x=World.mouseX;

    if(isTouching(ball4,ball2)){
      ball4.shapeColor="red"
      ball2.shapeColor="red"

    }else{
      ball4.shapeColor="green"
      ball2.shapeColor="green"

    }

  drawSprites();
}









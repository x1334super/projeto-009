var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }
  if (keyDown("q")){
    background("yellow");
  }
  if (keyDown("w")){
    background("blue")}
  if (keyDown("e")){
    background("green")}
  if (keyDown("a")){
    background("white")}
  if (keyDown("s")){
    background("purple")}  
  if (keyDown("d")){
    background("red")}   












drawSprites();
}





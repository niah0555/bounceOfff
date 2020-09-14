var movingrect, fixedrect, object;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
movingrect=createSprite(200,200,50,100);
movingrect.shapeColor="blue";
fixedrect=createSprite(400,400,100,200);
fixedrect.shapeColor="blue";
object=createSprite(30,400,200,100);
object.velocityX=6;
object.shapeColor="yellow";
}


function draw() {
  background(255,255,255); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
 movingrect.shapecolor="pink";
 fixedrect.shapeColor="pink";
    }
    else
    {
     movingrect.shapeColor="blue";
     fixedrect.shapeColor="blue";
    }
    BounceOff(object,fixedrect);
  drawSprites();
}

function BounceOff(movingrect,fixedrect){
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
movingrect.velocityX=movingrect.velocityX*-1;
  }
    if (movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
movingrect.velocityY=movingrect.velocityY*-1;
    }

}
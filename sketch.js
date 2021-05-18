var moverect,fixedrect;


function setup() {
  createCanvas(800,400);
 moverect = createSprite(400, 200, 100, 50);
 moverect.shapeColor = "green";
 fixedrect = createSprite(400, 200, 100, 50);
 fixedrect.shapeColor = "green";
}

function draw() {
  background("black");
  moverect.x = mouseX;
  moverect.y = mouseY;  

  if(moverect.x-fixedrect.x<=moverect.width/2+fixedrect.width/2 && 
    fixedrect.x-moverect.x<=moverect.width/2+fixedrect.width/2 &&
    moverect.y-fixedrect.y<=moverect.height/2+fixedrect.height/2 &&
    fixedrect.y-moverect.y<=moverect.height/2+fixedrect.height/2){
    moverect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{moverect.shapeColor = "green";
  fixedrect.shapeColor = "green";

  }
  drawSprites();
}
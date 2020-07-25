var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400, 200, 50, 80);
  movingrect.shapeColor="green";
  fixedrect=createSprite(400,400,80,30);
  fixedrect.shapeColor="green";
}

function draw() {
  background(0,0,0);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2
    &&  fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2
    &&  movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2
    &&  fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2 ){
      
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
  
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";    
  }

  drawSprites();
  
}
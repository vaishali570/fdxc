var anthony,anthonyImg;
var boeing,boeingImg;
var boy,boyImg;
var jet;
var enemyjet;
var bullets;
var coins,coinsImg;
var bg;
var score=0;


//function preload(){
//anthonyImg=loadImage("anthony.png")
//boeingImg=loadImage("jet.jpg")
//boyImg=loadImage("boy.png")
//coinImg=loadImage("coin.png")
//bg=loadImage("background.jpg")


//}


function setup() {
  createCanvas(400,400);

  boeing=createSprite(200,300,20,10)
  //boeing.addImage("boeingImg")
  boeing.shapeColor="red"

  anthony=createSprite(250,350,30,20)
  //anthony.addImage("anthonyImg")
  anthony.shapeColor="yellow"

  boy=createSprite(300,250,20,30)
 // boy.addImage("boyImg")
 boy.shapeColor="purple"

  coins=createSprite(350,200,20,30)
 // coins.addImage("coinImg")
   coins.shapeColor="pink"

  
  
  
 }

  

function draw() {
background(0); 

boeing.x=mouseX;
boeing.y=mouseY;

if(keyDown ("SPACE")){
bullets=createSprite(boeing.x,boeing.y,10,40)
bullets.velocityY=-10;
}
 
spawnjet();


textSize(20)
text ("SCORE"+score,200,50)


  drawSprites();
}
function spawnjet(){
  if(World.frameCount% 60===0){
    enemyjet=createSprite(100,50,20,20)
    enemyjet.shapeColor="white"
    enemyjet.velocityY=1;

   enemyjet.x=Math.round(random(20,380))

  }
  
  if(bullets.isTouching(enemyjet)){
  enemyjet.destroy();
  bullets.destroy();
  }
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
    anthony.x=anthony.x-5;
  }

  if(keyCode===RIGHT_ARROW){
    anthony.x=anthony.x+5;
  }

 


}
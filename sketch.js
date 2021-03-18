//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  dog1=loadImage ("images/dogImg.png");
  happyDog= loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
   dog = createSprite(250,280)
  dog.scale=0.5;
  dog.addImage(dog1);
database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}

  drawSprites();
  //add styles here
 // textSize(10);
  fill(rgb(0,0,20))
  textSize(20)
  text("Press the up arrow to feed Drago",100,50)

  textSize(30);
  text("Food Remaining: "+foodS, 115, 100);
}



function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if (x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref ('/').update({
Food:x
})
}


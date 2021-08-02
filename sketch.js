//Create variables here
var dog,happydog,foodstock,foodS;
var database;




function preload()
{
  //load images here
  dogImg =  loadImage('images/dogImg.png')
  Dimg = loadImage('images/dogImg1.png')
 
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10)
  dog.addImage(dogImg)
  dog.scale = 0.15
  
  foodRef = database.ref("Food")
  foodRef.on("value",readDatabase)
  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(Dimg)
   
  }

  fill("white")
  stroke("black");
  textSize(15)
  drawSprites();
  //add styles here
  
  text("Press UP key to feed SCOOPY milk",150,50)
  text("Food Remaining  "+foodS,200,100)
}

function writeStock(x){

  if(x<=0){
   x=0
  }
    else{
      x=x-1;
    }
  database.ref("/").update({
  Food:x
  })
 
}

function readDatabase(data){

foodS = data.val();

}

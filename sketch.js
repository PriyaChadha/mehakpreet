function preload(){
  image1=loadImage("Mehak/Grass_Sample.png")
  image2=loadImage("Mehak/beach.jpg")
  image3=loadImage("Mehak/Water1.png")

  image4=loadImage("Mehak/m.png")
  image5=loadImage("Mehak/e.png")
  image6=loadImage("Mehak/h.png")
  image7=loadImage("Mehak/a.png")
  image8=loadImage("Mehak/k.png")
  image9=loadImage("Mehak/waterfairy.png")
 // image2=loadAnimation("png/tile000.png","png/tile001.png","png/tile002.png","png/tile003.png","png/tile004.png","png/tile005.png","png/tile006.png","png/tile007.png","png/tile008.png","png/tile009.png",)
}


function setup() {
  createCanvas(850,650);

 bg1=createSprite(400,220,1200,500)
 bg1.addImage(image1);
 bg1.scale=1.75

 bg2=createSprite(400,780,1200,500)
 bg2.addImage(image1);
 bg2.scale=1.75

 bg3=createSprite(400,1340,1200,500)
 bg3.addImage(image1);
 bg3.scale=1.75

 bg4=createSprite(400,1830,1200,500)
 bg4.addImage(image2);
 bg4.scale=1.75

 bg5=createSprite(400,2650,1200,500)
 bg5.addImage(image3);
 bg5.scale=5.3

player= createSprite(400, 200, 50, 50);

  m=createSprite(-99,2309)
  m.addImage(image4);
  m.scale=0.35

 e=createSprite(150,2329)
 e.addImage(image5);
 e.scale=0.35

 h=createSprite(400,2360)
 h.addImage(image6);
 h.scale=0.35
 
 a=createSprite(621,2360)
 a.addImage(image7);
 a.scale=0.35

 k=createSprite(868,2380)
 k.addImage(image8);
 k.scale=0.5

 fairy=createSprite(400,2120)
 fairy.addImage(image9);
 fairy.scale=0.5
}






function draw() {
  background("pink");  
 if(keyDown("right")){
   player.x+=13;
 }
 if(keyDown("left")){
   player.x-=13;
 }
 if(keyDown("up")){
   player.y-=20;
 }
 if(keyDown("down")){
   player.y+=20;
 }

 console.log("X: " + player.x)
console.log(" Y: " + player.y)

 if(player.x<582 && player.x>218){
  camera.x=player.x;
 }
 if(player.y<2293 && player.y>350){
  camera.y=player.y;
 }
 
 console.log(camera.y);


  drawSprites();
}
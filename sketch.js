var backgroundIMG;
var snowIMG;





function preload(){

backgroundIMG = loadImage("snow1.jpg");
snowImg2 = loadImage("snow2.jpg");
snowImg3 = loadImage("snow3.jpg");
snowImg4 = loadImage("snow4.webp");
snowImg5 = loadImage("snow5.webp");
boyIMG = loadImage("Boy.jpg");

}


function setup() {
  createCanvas(1200,400);
  boy = createSprite(200, 300, 50, 50);
  boy.addImage(boyIMG);
  boy.scale = 0.3;

}

function draw() {
  background(backgroundIMG);  
  drawSprites();

  snow = createSprite(100,-40,50,50);
  snow.addImage(snowImg4);
  snow.scale = 0.1;
  snow.y = snow.y + 12;

  snow2 = createSprite(300,-40,50,50);
  snow2.addImage(snowImg4);
  snow2.scale = 0.1;
  snow2.y = snow2.y + 12;

  snow3 = createSprite(400,-40,50,50);
  snow3.addImage(snowImg4);
  snow3.scale = 0.1;
  snow3.y = snow3.y + 12;

  snow4 = createSprite(500,-40,50,50);
  snow4.addImage(snowImg4);
  snow4.scale = 0.1;
  snow4.y = snow4.y + 12;

  snow5 = createSprite(800,-40,50,50);
  snow5.addImage(snowImg4);
  snow5.scale = 0.1;
  snow5.y = snow5.y + 12;

  snow6 = createSprite(1000,-90,50,50);
  snow6.addImage(snowImg4);
  snow6.scale = 0.1;
  snow6.y = snow6.y + 12;

  snow7 = createSprite(200,-100,50,50);
  snow7.addImage(snowImg4);
  snow7.scale = 0.1;
  snow7.y = snow7.y + 12;

  snow8 = createSprite(1100,-70,50,50);
  snow8.addImage(snowImg4);
  snow8.scale = 0.1;
  snow8.y = snow8.y + 12;

  if(keyDown("a")){

    boy.x = boy.x - 5;

  }

  if(keyDown("d")){

    boy.x = boy.x + 5;
    
  }

  if(keyDown("space")){

    snow.velocityY = 4;
    snow2.velocityY = 5;
    snow3.velocityY = 3;
    snow4.velocityY = 7;
    snow5.velocityY = 8;
    snow6.velocityY = 5;
    snow7.velocityY = 7;
    snow8.velocityY = 2;
  }

}
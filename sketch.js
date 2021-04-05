var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);


 speed=random(55,100);
 weight= random(100,20) 

car=createSprite(50,200,50,50);

wall = createSprite(1300,200,60,height/2)

}

function draw() {
  background(0,0,0);

  car.velocityX=speed;

  if(wall.x-car.x< (car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>100)
    {
      car.shapeColor=color("green")
    }
    if(deformation<100 && deformation>180)
    {
      car.shapeColor=color("yellow");
    }
    if(deformation<180)
    {
      car.shapeColor=color("red");
    }
  }

  drawSprites();
}
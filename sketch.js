var ground,stand1,box1,ball;
var world,engine;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  ball=new Body(100,200);
  sling=new Sling(ball.body,{x:100,y:200});
  box1=new Box(530,400,50,100);
  box2=new Box(580,400,50,100);
  box3=new Box(630,400,50,100);
  box4=new Box(680,400,50,100);
  box5=new Box(730,400,50,100);
  box6=new Box(780,400,50,100);
  box7=new Box(830,400,50,100);
  box8=new Box(880,400,50,100);
  box9=new Box(930,400,50,100);
  box10=new Box(980,400,50,100);
  box11=new Box(1030,400,50,100);
  box12=new Box(1080,400,50,100);
    //row2
  box13=new Box(580,300,50,100);
  box14=new Box(630,300,50,100);
  box15=new Box(680,300,50,100);
  box16=new Box(730,300,50,100);
  box17=new Box(780,300,50,100);
  box18=new Box(830,300,50,100);
  box19=new Box(880,300,50,100);
  box20=new Box(930,300,50,100);
  box21=new Box(980,300,50,100);
  box22=new Box(1030,300,50,100);
  //row3
  box23=new Box(630,200,50,100);
  box24=new Box(680,200,50,100);
  box25=new Box(730,200,50,100);
  box26=new Box(780,200,50,100);
  box27=new Box(830,200,50,100);
  box28=new Box(880,200,50,100);
  box29=new Box(930,200,50,100);
  box30=new Box(980,200,50,100);
  //row4
  box31=new Box(680,100,50,100);
  box32=new Box(730,100,50,100);
  box33=new Box(780,100,50,100);
  box34=new Box(830,100,50,100);
  box35=new Box(880,100,50,100);
  box36=new Box(930,100,50,100);
 
  ground=new Ground(width/2,height,width,30);
  stand1=new Ground(805,3*height/4,603,10);
}

function draw() {
  background("black");
  Engine.update(engine);
  stand1.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  ground.display();
  ball.display();
  sling.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  sling.fly();

}
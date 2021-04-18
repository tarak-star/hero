const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hero, slingshot;
var block1,block2,block3,block4,block5;
function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  platform = new Ground(355, 410, 900, 15);
 hero = new Hero(220,310,200,100);
 slingshot = new SlingShot(hero.body,{x:220, y:310});
 block1= new Block(460,370,50,50);
 block2= new Block(460,320,50,50);
 block3= new Block(460,270,50,50);
 block4= new Block(460,220,50,50);
 block5= new Block(460,170,50,50);
 //level2 
 block6= new Block(520,370,50,50);
 block7= new Block(520,320,50,50);
 block8= new Block(520,270,50,50);
 block9= new Block(520,220,50,50);
 block10= new Block(580,370,50,50);
 block11= new Block(580,320,50,50);
 block12= new Block(580,270,50,50);
 block13= new Block(580,220,50,50);
 block14= new Block(580,170,50,50);
 Monster = new monster(750,350,100,100);

}

function draw() {
  background("");
  console.log(mouseX+","+mouseY);
  Engine.update(engine);
  hero.display();
  platform.display();
  Monster.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32)
  
  bird.trajectory=[];
  slingshot.attach(bird.body);
  Matter.Body.setPosition(bird.body,{x:200 , y: 50});
}
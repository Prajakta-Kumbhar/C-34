
const Engine = Matter.Engine;  
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var build1,build2,build3,build4;
var ground;
var box;
var ball1;
var rope;

function setup() {
  createCanvas(800,600);
  background("black")

  engine = Engine.create();
  world = engine.world;

  build1 = new Ground(450,350,30,60,false)
  build2 = new Ground(450,290,30,60,false)
  build3 = new Ground(450,230,30,60,false)
  build4 = new Ground(450,170,30,60,false)

  ground = new Ground(400,600,800,20,true)

  box = new Ground(250,200,200,30,true)

  ball1 = new Ball(100,300,30)

  rope = new Rope(box.body,ball1.body)

}

function draw()
{
  background(220,255,255); 
  Engine.update(engine);
 
  push()
  fill("red")
  build1.display()
  build2.display()
  build3.display()
  build4.display()
  pop()

  ball1.display()

  rope.display()

  box.display()
  push()
  fill("brown")
  ground.display()
  pop()
}

function mouseDragged()
{
  Matter.Body.setPosition(ball1.body,{x: mouseX, y: mouseY})
}

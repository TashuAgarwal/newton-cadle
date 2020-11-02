
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;
	
	bob1 = new Bob(100, 460, 30)
	bob2 = new Bob(200, 460, 30)
	bob3 = new Bob(300, 460, 30)
	bob1 = new Bob(400, 460, 30)
	bob1 = new Bob(450, 460, 30)
    roof = new Roof(350, 30, width, 40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
}




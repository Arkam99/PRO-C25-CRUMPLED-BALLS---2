
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbinObject;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400, 680, 790, 20);

  leftSide = new Dustbin(570, 620, 20, 100);

  dustbinObject = new Dobject(620, 605, 130, 130);

  bottomSide = new Dustbin(620, 660, 100, 20);

  rightSide = new Dustbin(670, 620, 20, 100);

  waste = new Waste(100, 600, 40);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  ground.display();
  leftSide.display();
  bottomSide.display();
  rightSide.display();
  waste.display();
  dustbinObject.display();



  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(waste.body,waste.body.position,{x:240, y:-250});
	}
}



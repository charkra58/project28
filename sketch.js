const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  log1 = new this.log1(400,550,20,100);
  log2 = new this.log2(550,550,20,100);
  log3 = new this.log3(200,420,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  

  log1.display();
  log2.display();
  log3.display();

  dustbin.display();
  paper.display();

  super.display();
  


  
  drawSprites();
 
}




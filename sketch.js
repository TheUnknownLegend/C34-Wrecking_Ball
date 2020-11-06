
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground , roof;

var stack1 = [];
var stack2 = [];
var stack3 = [];

var ball;

var rope

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height - 20 ,width , 15);

	roof = new Ground(300,200,10,10);

	for(var k = 0; k < 8;k++ ){
	  stack1.push(new Blocks(700,100));
	  }
		  
	for(var k = 0; k < 8;k++ ){
	  stack2.push(new Blocks(750,100));
	  }

	for(var k = 0; k < 8;k++ ){
		stack3.push(new Blocks(800,100));
		}

		ball = new Ball(200,400,50,50);

		rope = new Rope(ball.body,roof.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  
  drawSprites();

 
	
  for(var k = 0; k < stack1.length;k++){
	  stack1[k].display();
  }

  for(var k = 0; k < stack2.length;k++){
	stack2[k].display();
	}

for(var k = 0; k < stack3.length;k++){
	stack3[k].display();
	}

	rope.display();

	ball.display();
	
	  ground.display();

  text(mouseX + ", " + mouseY , mouseX , mouseY);
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX , y: mouseY});
}



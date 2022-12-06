var ball;
var groundObj, leftSide, rightSide;
var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	
	engine = Engine.create();
	world = engine.world;

	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(900,600,20,120);
	rightSide = new Ground(1100,600,20,120);
	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}	

	ball = Bodies.circle(100, 100, 20, ball_options);

	World.add(world, ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.display();
  leftSide.display();
  rightSide.display();

  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40 ,40);
	
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.applyForce(ball, ball.position,{x:85, y:-85});
	}
}



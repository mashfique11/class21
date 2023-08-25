
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var engine
var world



function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;
    var ballOptions = {
		isStatic:false,
		restitution:0.15
		
		
	}


	//Create the Bodies Here.
    ball = Bodies.circle(100,200,20,ballOptions)
	World.add(world,ball) 
	ground = new Ground(400,690,1200,10)
	rightWall = new Ground(800,350,10,900)
	leftWall = new Ground(10,350,10,900)
	topWall = new Ground(400,10,1200,10)
	wall1 = new Ground(400,640,10,80)
	wall2 = new Ground(700,640,10,80)


	
  
}


function draw() {
	background(0)
  Engine.update(engine)	
  rectMode(CENTER);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.show()
  rightWall.show()
  leftWall.show()
  topWall.show()
  wall1.show()
  wall2.show()
  
  
  

  if(keyDown("up_arrow")){
	hForce()
  }
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.015,y:-0.015})
}




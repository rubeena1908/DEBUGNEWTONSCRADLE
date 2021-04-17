
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint= Matter.Constraint;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
bobDiameter=40

startBobPositionX=width/2;
startBobPositionY=height/4+500;
bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	//Create the Bodies Here
	roofObject= new Bar(width/2,height/4,width/7,20);
	



	
	//Create a Ground
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	rope1=new Rope(bob1.body,roofObject.body,-bobDiameter*2, 0)
	 rope2=new Rope(bob2.body,roofObject.body,-bobDiameter*1, 0) 
	 rope3=new Rope(bob3.body,roofObject.body,0, 0) 
	 rope4=new Rope(bob4.body,roofObject.body,bobDiameter*1, 0)
	  rope5=new Rope(bob5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  roofObject.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  drawSprites();
 
}
function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
	
	
	}
 function drawLine(Constraint)
{

	bobBodyposition=constraint.bodyA.position
	roofBodyposition=constraint.bodyB.position
	roofbodyOffset=constraint.pointB
	roofBodyX= roofBodyposition.x+roofBodyOffset.x
	roofBodyY= roofBodyposition.y+roofBodyOffset.y
	line(bobBodyposition.x,bobBodyposition.y,roofBodyX,roofBodyY)
}



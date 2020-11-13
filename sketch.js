
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint  = Matter.Constraint;
var bobObj,bobObj2,bobObj3,bobObj4,bobObj5
var roofObj
var rope1,rope2,rope3,rope4,rope5
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
   rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj = new Roof(width/2,height/4,width/7,20);
	bobDiameter=40
	startBobPositionX=width/2;
	startBobPositionY=width/4+500;
    bobObj = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObj2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObj3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObj4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObj5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	rope1 = new Rope(bobObj.body,roofObj.body,-bobDiameter*2,0)
	rope2 = new Rope(bobObj2.body,roofObj.body,-bobDiameter*1,0)
	rope3 = new Rope(bobObj3.body,roofObj.body,0,0)
	rope4 = new Rope(bobObj4.body,roofObj.body,-bobDiameter*1,0)
	rope5 = new Rope(bobObj5.body,roofObj.body,-bobDiameter*2,0)

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(235);
  
  roofObj.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObj.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj.body,bobObj.body.position,{x:-50,y:-45});
	}
}

function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position
	roofBodyoffSet=constraint.pointB
	roofBodyX=roofBodyPosition.x+roofBodyoffSet.x
	roofBodyY=roofBodyPosition.y+roofBodyoffSet.y
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}





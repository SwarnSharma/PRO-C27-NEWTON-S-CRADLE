
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5;
var roofObject,bg;
var rope1,rope2,rope3, rope4,rope5;
var world;

function preload(){
  bg=loadImage("bg.jpg");
}


function setup() {
	createCanvas(1360, 620);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(700,250,230,20);
	bob1 = new bob(620,575,40)
	bob2 = new bob(660,575,40)
	bob3 = new bob(700,575,40)
	bob4 = new bob(740,575,40)
	bob5 = new bob(780,575,40)
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,00, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
  rope5=new rope(bob5.body,roofObject.body,80, 0)

	Engine.run(engine);
	
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(bg);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  if(keyDown("space")){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-15});
 	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-20,y:-15});
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-20,y:-15});
  }
  if(keyDown("ctrl")){
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:20,y:15});
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:20,y:15});
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:20,y:15});
  }
  if(keyDown("shift")){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-15});
 	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-20,y:-15});
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-20,y:-15});
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-20,y:-15});

  }
  if(keyDown("enter")){
	Matter.Body.applyForce(bob2.body,bob2.body.position,{x:20,y:15});
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:20,y:15});
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:20,y:15});
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:20,y:15});

  }


}

function keyPressed() {

if(keyCode===LEFT_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
}
if(keyCode===RIGHT_ARROW){
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45});
}
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45});
  }
  if(keyCode===DOWN_ARROW){
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:50,y:45});
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45});
  }
  
}




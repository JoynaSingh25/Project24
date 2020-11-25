const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function setup() {
	createCanvas(1000,350);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(500,height,1200,30);
	paper = new Paper(120,200);

	boxPosition=650;
 	boxY=280;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("white");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("white");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("white");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody);

    var render = Render.create{{
		element : document.body
		engine :engine,
		options {
 width:1200,
height:700,
wireframes:false
		}	
	}}
	

	Engine.run(engine);
}


function draw() {
background(0);
  rectMode(CENTER);
  ground.display();
  paper.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body, paper.body.position,{x:45,y:-50})
	}}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var divisions=[];
var particles=[];
var plinkos=[];

var divisionHeight=300;
function preload()
{
	
}

function setup() {
	createCanvas(480,800);
	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(240,800,480,10);
	wall1 = new Ground(480,400,10,800);
	wall2 = new Ground(0,400,10,800);


for (var k = 0; k <=width;k = k+80) {
	divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}

for (var j = 40; j <=width;j = j+50) {
	plinkos.push(new Plinko(j,75,8))

}

for (var j = 15; j <=width;j = j+50) {
	plinkos.push(new Plinko(j,175,8))

}

for (var j = 40; j <=width;j = j+50) {
	plinkos.push(new Plinko(j,275,8))

}
for (var j = 15; j <=width;j = j+50) {
	plinkos.push(new Plinko(j,375,8))
}

for (var j = 15; j <=width;j = j+50) {
	plinkos.push(new Plinko(j,375,8))
}





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  wall1.display();
 wall2.display();
 for (var k = 0; k < divisions.length; k++) {
	
	divisions[k].display();
 }

 for (var j = 0; j < particles.length; j++) {
	
	particles[j].display();
 }
 for (var j = 0; j < plinkos.length; j++) {
	
	plinkos[j].display();
 }


 ground.display();
 if (frameCount%60===0) {
	 particles.push(new Particle(random(width/2-10,width/2+10),10,10))
 }
 

  drawSprites();
 
}




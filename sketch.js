


//Crie um namespace (espaço de nomes) para Mecanismo
const Engine = Matter.Engine;
//Crie um namespace (espaço de nomes) para Mundo
const World = Matter.World;
//Crie um namespace (espaço de nomes) para Corpos
const Bodies = Matter.Bodies;
//Crie um namespace (espaço de nomes) para Corpo
const Body = Matter.Body;

var engine

var angle1 = 60
var angle2 = 80 
var angle3 = 100


function setup() {
  createCanvas(400, 400);
  //crie o mecanismo
  engine = Engine.create();
  //Adicione mundo ao mecanismo
  world = engine.world



  ball = Bodies.circle(200, 80, 20);
  World.add(world, ball)

  var ball_options = {
    restitution: 0.95, // poder de quicar da bola
    frictionAir: 0.01   //atrito ao ar
  }

  var particle_options = {
    restitution: 0.4,
    frictionAir: 0.02

  }



  var ground_options = {
      isStatic: true

  };


  //crie o solo
  ground = Bodies.rectangle(200, 400, 400, 20, ground_options)
  //adicione ao mundo
  World.add(world, ground)

  rotator1 = Bodies.rectangle(200, 180, 400, 20, ground_options)
  World.add(world, rotator1)

  rotator2 = Bodies.rectangle(200, 180, 400, 20, ground_options)
  World.add(world, rotator2)

  rotator3 = Bodies.rectangle(200, 180, 400, 20, ground_options)
  World.add(world, rotator3)

  bloco1 = Bodies.rectangle(300, 300, 400, 20, ground_options)
  World.add(world, bloco1)

  bloco2 = Bodies.rectangle(100, 300, 400, 20, ground_options)
  World.add(world, bloco2)

  particle1 = Bodies.circle(100, 0, 10, particle_options)
  World.add(world, particle1)

  particle2 = Bodies.circle(220, 20, 10, particle_options)
  World.add(world, particle2)

  particle3 = Bodies.circle(100, 0, 10, particle_options)
  World.add(world, particle3)

  particle4 = Bodies.circle(100, 0, 10, particle_options)
  World.add(world, particle4)




  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);


  ellipse(particle1.position.x, particle1.position.y, 10)
  ellipse(particle2.position.x, particle2.position.y, 10)
  ellipse(particle3.position.x, particle3.position.y, 10)
  ellipse(particle4.position.x, particle4.position.y, 10)
  
  rect(bloco1.position.x, bloco1.position.y, 100, 20)
  rect(bloco2.position.x, bloco2.position.y, 100, 20)

Matter.Body.rotate(rotator1, angle1)
push();
translate(rotator1.position.x, rotator1.position.y)
rotate(angle1)
rect(0, 0 , 150, 20)
pop();
angle1 += 0.1

Matter.Body.rotate(rotator2, angle2)
push();
translate(rotator2.position.x, rotator2.position.y)
rotate(angle2)
rect(0, 0 , 150, 20)
pop();
angle2 += 0.1

Matter.Body.rotate(rotator3, angle3)
push();
translate(rotator3.position.x, rotator3.position.y)
rotate(angle3)
rect(0, 0 , 150, 20)
pop();
angle3 += 0.1


}


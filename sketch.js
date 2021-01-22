
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Purground ,ball ;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
   isStatic:true


    }

  Purground = Bodies.rectangle(200,390,200,25,ground_options);


  var ball_options={
   restitution :1.0  

  }

  ball = Bodies.circle(200,100,10,ball_options) ;


  World.add(world, Purground);
  World.add(world, ball);
 // console.log(object.position.x);
 // console.log(object.position.y);
  console.log(Purground);
}

function draw() {
  background("blue"); 

  Engine.update(engine);

  rectMode(CENTER);
  // THIS IS AN IMAGE   
 rect( Purground.position.x,Purground.position.y,300,25) ;

ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y,20,20 );

}

// i have u make 2 BODIES -- BALL  GROUND 
// 1st ill make a ground body 
// then ill make a ball body 
// then ball body will fall on ground body  . 
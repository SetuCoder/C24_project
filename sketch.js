
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var tanker;
var bgimg;

var engine,world;

function preload(){
    bgimg = loadImage("image.jpg")
}

function setup() {
   
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
 
    tanker = new Tanker(180,340,44,80,PI/2.8);
    ground = new Ground(600,height,1200,10);
    ball = new Ball(1000,80,40);
    sq = new Sq(130,335,8,8,PI/3);
    back = new Back(145,358,23);
    wheel = new Wheel(167,375,20);
    wheel2 = new miniWheel(167,375,6);

} 

function draw() {
    background(bgimg);
    Engine.update(engine);

    strokeWeight(3);
    
    ball.display();
    back.display();
    tanker.display();
    sq.display();
    ground.display(); 
    wheel.display();
    wheel2.display();
    
}

function keyPressed() {
    angleMode(DEGREES)
    if(keyCode === UP_ARROW){
        tanker.body.angle=shooter.body.angle-15;
    } else
    if(keyCode === DOWN_ARROW){
        tanker.body.angle=shooter.body.angle+15;
    }
}
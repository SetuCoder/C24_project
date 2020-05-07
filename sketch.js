
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var tanker;
var bgimg;

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
    line(115,325,128,333);

    
    ball.display();
    back.display();
    tanker.display();
    sq.display();
    ground.display(); 
    wheel.display();
    wheel2.display();
    
}

/*
function mousePressesd(){
        Matter.Body.setPosition(tanker.body, {x: mouseX});
        Matter.Body.setPosition(back.body, {x: mouseX});
        Matter.Body.setPosition(wheel.body, {x: mouseX});
}
*/
class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.circle(x,y,55,options);
    this.radius = radius
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position
    var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle); 
      fill(247,231,51)
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
  }
}

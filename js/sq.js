class Sq{
    constructor(x, y, width, height,angle) {
        var options = {
        isStatic: true
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       Matter.Body.setAngle(this.body, angle);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
      };
  
      display(){
        var angle = this.body.angle;
        var pos = this.body.position
          push();
          translate(pos.x, pos.y);
          rectMode(CENTER);
          rotate(angle);
          fill(255, 105, 119);
          rect(0,0,this.width,this.height,angle);
          pop();
  
      };
  }
  
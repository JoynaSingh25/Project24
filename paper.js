class Paper {
    constructor(x,y,width,height) {
      var options = {
       'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.3
      }

      this.x = x;
      this.y = y;
      this.r = r;
      
      this.body = Bodies.circle(this.x,this.y,options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push()
translate(paper.x,paper.y)
      rectMode(CENTER);
      fill("pink");
      ellipse(0,0,this.r,this.r);
      pop()
      
    }
  }
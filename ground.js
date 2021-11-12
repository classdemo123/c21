class Ground 
{
  constructor(x, y, w, h) // these are parameters 200,390,400,20
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    
    push();
    rectMode(CENTER);
    stroke("blue");
    fill("red");
    rect(pos.x, pos.y, w,h);
    pop();
  }
  
}



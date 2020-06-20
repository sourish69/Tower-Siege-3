class Box
{
    constructor(x, y, width, height)
     {
        var options = {
             isStatic:false,
            //'restitution':0.8,
            //'friction':1.0,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.image = loadImage("box.png");
        World.add(world, this.body);
      }
      display()
      {
        if(this.body.speed < 6.7)
        {
        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        image(this.image,0,0,this.width, this.height);
        pop()
        }
        else
        {
          World.remove(world,this.body);
          push()
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          pop()
        }
        
      }
      score()
      {
        if((this.visibility < 25)&&(this.visibility > -120))
        {
          score++;
        }
      }
}
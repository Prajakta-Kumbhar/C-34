class Ball
{
    constructor(xpos,ypos,radius)
    {
       var build_options = 
       {
           friction : 0.1,
           restitution : 0.5,
           density : 1
       }
       this.body = Bodies.circle(xpos,ypos,radius,build_options)
       this.radius = radius
       World.add(world,this.body)
    }
    display()
    {
       var position = this.body.position;
       ellipseMode(RADIUS)
       ellipse(position.x,position.y,this.radius)
    }
}
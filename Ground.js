class Ground
{
    constructor(xpos,ypos,width,height,static1)
    {
       var build_options = 
       {
           isStatic : static1,
           friction : 0.1,
           restitution : 0.5,
           density : 1
       }
       this.body = Bodies.rectangle(xpos,ypos,width,height,build_options)
       this.width = width
       this.height = height
       World.add(world,this.body)
    }
    display()
    {
       var position = this.body.position;
       rectMode(CENTER)
       rect(position.x,position.y,this.width,this.height)
    }
}
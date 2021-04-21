class Rope
{
    constructor(body1, body2)
    {
      var options = 
      {
          bodyA : body1,
          bodyB : body2,
          length : 300,
          stiffness : 0.3
      }
      this.body = Matter.Constraint.create(options)
      World.add(world,this.body)
    }
    display()
    {
      var position = this.body.bodyA.position
      var position1 = this.body.bodyB.position

      line(position.x,position.y,position1.x, position1.y)
    }
}
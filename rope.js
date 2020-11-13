class Rope {
    constructor(body1,body2,offSetX,offSetY){
        this.offSetX = offSetX
        this.offSetY = offSetY;
        var options = {
        bodyA: body1,
        bodyB:body2,
        pointB:{x:this.offSetX,y:this.offSetY}
        }
        
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
  display(){
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;
      strokeWeight(2);
      var Anchor1X=pointA.x
      var Anchor1Y=pointA.y
      var Anchor2X=pointB.x+this.offSetX
      var Anchor2Y=pointB.y+this.offSetY

      line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
      
  }

}
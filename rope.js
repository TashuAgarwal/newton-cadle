class Rope {
    constructor(bodyA, bodyB){
    var pro = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness:0.5,
        length:40
    }
    this.chain = Constraint.create(pro)
    World.add(world,this.chain)
  }

  display(){
  var a = this.chain.bodyA.position;
  var b = this.chain.bodyB.position;
  strokeWeight(4);
    line(a.x, a.y, b.x, b.y) 
  }
}
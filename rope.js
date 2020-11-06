class Rope{
    constructor(bodyA,bodyB){

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:1.0,
            length: 400
        }

        this.rope = Constraint.create(options);
        World.add(world,options) 

    }
display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        push();
        strokeWeight(5);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

    }
}
class Blocks{
    constructor( x , y ){

        var options={
            'restitution' : 0.7,
            'friction' : 0.9,
            'density' : 0.8
        }

        this.width = 50;
        this.height = 50;
        this.body = Bodies.rectangle(x, y, this.width , this.height, options);
        
        World.add(world, this.body)
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x ,pos.y);
        rectMode(CENTER);
        rect( 0 , 0 , this.width , this.height);
        pop();

    }
}
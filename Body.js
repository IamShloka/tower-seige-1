class Body{
    constructor(){
        var options = {
            'restitution':1.5,
            'friction':1.2,
            'density':1.0
        }
        this.image=loadImage("hexagon.png");
        this.body=Bodies.circle(100,200,35);
        World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,70,70);

        pop();
    }
}
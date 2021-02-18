class Hero {
    constructor(x, y, w, h, angle){
        var options = {
            isStatic: true,
            frictionAir: 0.005,
            density: 1
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("images/Superhero-01.png")
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
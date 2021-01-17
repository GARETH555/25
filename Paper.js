class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius
       this.image=loadImage("PRO25_3.png")
        World.add(world, this.body);
    }
    display(){
    
  imageMode(RADIUS);



  image(this.body.position.x, this.body.position.y, this.radius);

    }       
};
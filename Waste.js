class Waste {
    constructor(x, y, radius) {
      var options = 
        {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        }
      
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 70;
      World.add(world, this.body);

    }
    display(){
     
    image(this.image,this.body.position.x, this.body.position.y,50,50);
    }
  };
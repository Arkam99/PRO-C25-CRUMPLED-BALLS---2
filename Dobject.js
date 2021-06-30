class Dobject {
    constructor(x, y, width, height) {
      var options =
      {
        isStatic: true,
        restitution:0,
        friction:0,
        density:1
      }
      this.image = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
    //  World.add(world, this.body);
      
    }
      display(){
      
      imageMode(CENTER)
      
      image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
       
        
      }
    };
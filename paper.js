class Paper{
    constructor(){
var options ={
    isStatic =false,
    restitution:0.3,
    friction:0.5,
    density:1.2

}
    
    this.body = Bodies.rectangle(x,y,50,50 , options);
    this.width = 50
    this.height =50
    this.image = loadImage("sprites/paper.png")
    world.add(world.this.body)
} 
display(){
    var pos = this.body.position
    pos.x = mouseX;
    pos.y = mouseY;
    var angle =this.body.angle

    push();
    translation(pos.x ,pos.y);
    rotate(angle)
    imageMode(CENTER)
    image(this.image, 0, 0 , this.width ,this.height);
    pop();
}
}

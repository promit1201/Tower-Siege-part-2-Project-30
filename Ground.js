class Ground{
constructor(x, y, width, height){
    var goptions={
    isStatic:true
    }
this.ground1=Bodies.rectangle(x, y, width, height, goptions);
this.width=width;
this.height=height;
World.add(world, this.ground1);
}

display(){

noStroke();
fill("blue");
rectMode(CENTER);
rect(this.ground1.position.x, this.ground1.position.y, 900, 20);

}

}
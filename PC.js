class Pc{
    constructor(x,y){
   var options={
    friction:0.001,
    restitution:0.1
}
this.pc = Bodies.rectangle(x,y,options)
//cargar la imagen del personaje
World.add(world,this.pc);
this.pcimg= loadImage("");
    }

        display(){
    /*if (UP_ARROW){
       this.body.position.y=+5,y;
    }

    if (DOWN_ARROW){
        this.body.position.y=-5,y;
     }

     if (LEFT_ARROW){
        this.body.position.y=x,-5;
     }

     if (RIGHT_ARROW){
        this.body.position.y=x,+5;
     }*/
    rect(this.x,this.y,50,50);

}
}
        
    

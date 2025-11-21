class Car{
    constructor(){
        this.obj = document.getElementById("car");
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = 0.05;
    }
    move(){
        this.x += this.dx;
        if(this.x > 20){
            this.x = -20;
        }
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }

}
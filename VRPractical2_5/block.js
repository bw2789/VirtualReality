class Block{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("src", "SEN.png");
    this.obj.setAttribute("color","black");
    scene.append(this.obj);

  }
}
class Drone{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.dy = 0.005
    this.z = z;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#drone1");
    this.obj.setAttribute("position",{x:x,y:0.5,z:z});
  
    this.camera = document.createElement("a-camera");
    this.camera.setAttribute("active",false);
    this.camera.setAttribute("wasd-controls-enabled",false);

    let cursor = document.createElement("a-cursor");
    cursor.setAttribute("color","yellow");
    this.camera.append( cursor );
    


    this.obj.append( this.camera )
    scene.append( this.obj );
  }


  fall(){
    this.y -= this.dy;
    if(this.y < 0.5){
      this.y += this.dy;
    }
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}

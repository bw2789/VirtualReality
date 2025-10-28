class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.05;

    this.obj = document.createElement("a-entity");
  
    let top = document.createElement("a-cone");
    top.setAttribute("radius-top","0");
    top.setAttribute("radius-bottom","0.5");
    top.setAttribute("height","1");
    top.setAttribute("color","red");
    roof.setAttribute("position","0 0 -2");
    this.obj.append( top );
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("color","gray");
    body.setAttribute("position","0 -1.5 -2");
    body.setAttribute("height","2");
    body.setAttribute("radius","0.5");
    this.obj.append( body );

    let bottom = document.createElement("a-cylinder");
    bottom.setAttribute("color","orange");
    bottom.setAttribute("position","0 -3.5 -2");
    bottom.setAttribute("height","2");
    bottom.setAttribute("radius-top","0");
    bottom.setAttribute("radius-bottom","0.25");
    bottom.setAttribute("rotation","-180 0 0");
    this.obj.append( bottom );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

    fly(){
    this.y += this.dy
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}


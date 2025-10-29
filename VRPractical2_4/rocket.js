class Rocket{
  constructor(x,y,z){
    this.a = 0;
    this.da = 0.01;
    this.obj = document.createElement("a-entity");
  
    let toppart = document.createElement("a-cone");
    toppart.setAttribute("radius-bottom","0.5");
    toppart.setAttribute("height","1");
    toppart.setAttribute("color","red");
    toppart.setAttribute("position","0 0 -2");
    this.obj.append(toppart);
  
    let body = document.createElement("a-cylinder");
    body.setAttribute("color","gray");
    body.setAttribute("position","0 -1.5 -2");
    body.setAttribute("height","2");
    body.setAttribute("radius","0.5");
    this.obj.append(body);

    let bottom = document.createElement("a-cylinder");
    bottom.setAttribute("color","orange");
    bottom.setAttribute("position","0 -3.5 -2");
    bottom.setAttribute("height","2");
    bottom.setAttribute("radius-top","0");
    bottom.setAttribute("radius-bottom","0.25");
    bottom.setAttribute("rotation","-180 0 0");
    this.obj.append(bottom);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj)
  }

  fly(){
    this.a += this.da;
    this.obj.setAttribute("position",{x:0, y:this.a, z:0});
  }

    
}


class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","yellow");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("height","1");
    base.setAttribute("width","1");
    base.setAttribute("depth","1");
    this.obj.append( base );
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color","red");
    roof.setAttribute("position","0 1.25 0");
    roof.setAttribute("height","1.25");
    roof.setAttribute("radius","0.75");
    roof.setAttribute("segments-radial","3");
    roof.setAttribute("rotation","270 0 0");
    this.obj.append( roof );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}




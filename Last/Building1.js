class Building1{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","red");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("height","1");
    base.setAttribute("width","20");
    base.setAttribute("depth","20");
    this.obj.append( base );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

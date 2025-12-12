class Cloud{
  constructor(x,y,z){
  this.obj = document.createElement("a-entity");
  
  let c1 = document.createElement("a-box");
  c1.setAttribute("color","white");
  c1.setAttribute("position","1 0.5 0");
  c1.setAttribute("depth","1.25");
  c1.setAttribute("height","0.25");
  c1.setAttribute("width","1.25");
  this.obj.append( c1 );
  
  let c2 = document.createElement("a-box");
  c2.setAttribute("color","white");
  c2.setAttribute("position","1 0.7 0");
  c2.setAttribute("depth","1.25");
  c2.setAttribute("height","0.25");
  c2.setAttribute("width","1.25");
  this.obj.append( c2 );

  let c3 = document.createElement("a-box");
  c3.setAttribute("color","white");
  c3.setAttribute("position","1 1 0");
  c3.setAttribute("depth","1.25");
  c3.setAttribute("height","0.25");
  c3.setAttribute("width","1.25");
  this.obj.append( c3 );
  
  this.obj.setAttribute("position",{x:x, y:y, z:z});
  scene.append( this.obj )
  }

}

  
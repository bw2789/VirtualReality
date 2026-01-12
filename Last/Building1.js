class Building1{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","red");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("height","0.1");
    base.setAttribute("width","15");
    base.setAttribute("depth","15");
    this.obj.append( base );

    let floor1wall1 = document.createElement("a-box");
    floor1wall1.setAttribute("color","#B3B3B3");
    floor1wall1.setAttribute("position","0 3.6 -7");
    floor1wall1.setAttribute("height","0.3");
    floor1wall1.setAttribute("width","14.8");
    floor1wall1.setAttribute("depth","0.25");
    floor1wall1.setAttribute("side","double");
    this.obj.append( floor1wall1 );

    let floor1wall2 = document.createElement("a-box");
    floor1wall2.setAttribute("color","#B3B3B3");
    floor1wall2.setAttribute("position","-7.25 2.1 -7");
    floor1wall2.setAttribute("height","3.3");
    floor1wall2.setAttribute("width","0.35");
    floor1wall2.setAttribute("depth","0.25");
    floor1wall2.setAttribute("side","double");
    this.obj.append( floor1wall2 );

    let floor1wall3 = document.createElement("a-box");
    floor1wall3.setAttribute("color","#B3B3B3");
    floor1wall3.setAttribute("position","7.25 2.1 -7");
    floor1wall3.setAttribute("height","3.3");
    floor1wall3.setAttribute("width","0.35");
    floor1wall3.setAttribute("depth","0.25");
    floor1wall3.setAttribute("side","double");
    this.obj.append( floor1wall3 );

    let floor1wall4 = document.createElement("a-box");
    floor1wall4.setAttribute("color","#B3B3B3");
    floor1wall4.setAttribute("position","4.25 2.1 -7");
    floor1wall4.setAttribute("height","3.3");
    floor1wall4.setAttribute("width","0.35");
    floor1wall4.setAttribute("depth","0.25");
    floor1wall4.setAttribute("side","double");
    this.obj.append( floor1wall4 );

    let floor1wall5 = document.createElement("a-box");
    floor1wall5.setAttribute("color","#B3B3B3");
    floor1wall5.setAttribute("position","1.25 2.1 -7");
    floor1wall5.setAttribute("height","3.3");
    floor1wall5.setAttribute("width","0.35");
    floor1wall5.setAttribute("depth","0.25");
    floor1wall5.setAttribute("side","double");
    this.obj.append( floor1wall5 );

    let floor1wall6 = document.createElement("a-box");
    floor1wall6.setAttribute("color","#B3B3B3");
    floor1wall6.setAttribute("position","-1.75 2.1 -7");
    floor1wall6.setAttribute("height","3.3");
    floor1wall6.setAttribute("width","0.35");
    floor1wall6.setAttribute("depth","0.25");
    floor1wall6.setAttribute("side","double");
    this.obj.append( floor1wall6 );

    let floor1wall7 = document.createElement("a-box");
    floor1wall7.setAttribute("color","#B3B3B3");
    floor1wall7.setAttribute("position","-4.75 2.1 -7");
    floor1wall7.setAttribute("height","3.3");
    floor1wall7.setAttribute("width","0.35");
    floor1wall7.setAttribute("depth","0.25");
    floor1wall7.setAttribute("side","double");
    this.obj.append( floor1wall7 );

    let floor1window = document.createElement("a-box");
    floor1window.setAttribute("color","#D7DFD8");
    floor1window.setAttribute("opacity","0.3");
    floor1window.setAttribute("position","0 1.6 -7");
    floor1window.setAttribute("height","4");
    floor1window.setAttribute("width","14.5");
    floor1window.setAttribute("depth","0.15");
    floor1window.setAttribute("side","double");
    this.obj.append( floor1window );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

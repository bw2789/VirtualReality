class Floor1Base{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","red");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("height","0.1");
    base.setAttribute("width","15");
    base.setAttribute("depth","15");
    this.obj.append( base );
    
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  } 
}

class Floor1Wall{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    // let base = document.createElement("a-box");
    // base.setAttribute("color","red");
    // base.setAttribute("position","0 0.5 0");
    // base.setAttribute("height","0.1");
    // base.setAttribute("width","15");
    // base.setAttribute("depth","15");
    // this.obj.append( base );

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
    floor1wall4.setAttribute("position","4.2 2.1 -7");
    floor1wall4.setAttribute("height","3.3");
    floor1wall4.setAttribute("width","0.35");
    floor1wall4.setAttribute("depth","0.25");
    floor1wall4.setAttribute("side","double");
    this.obj.append( floor1wall4 );

    let floor1wall5 = document.createElement("a-box");
    floor1wall5.setAttribute("color","#B3B3B3");
    floor1wall5.setAttribute("position","1.2 2.1 -7");
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
    floor1wall7.setAttribute("position","-4.67 2.1 -7");
    floor1wall7.setAttribute("height","3.3");
    floor1wall7.setAttribute("width","0.35");
    floor1wall7.setAttribute("depth","0.25");
    floor1wall7.setAttribute("side","double");
    this.obj.append( floor1wall7 );

    let floor1window1 = document.createElement("a-box");
    floor1window1.setAttribute("color","#D7DFD8");
    floor1window1.setAttribute("opacity","0.3");
    floor1window1.setAttribute("position","5.725 1.6 -7");
    floor1window1.setAttribute("height","4");
    floor1window1.setAttribute("width","2.7");
    floor1window1.setAttribute("depth","0.15");
    floor1window1.setAttribute("side","double");
    this.obj.append( floor1window1 );

    let floor1window2 = document.createElement("a-box");
    floor1window2.setAttribute("color","#D7DFD8");
    floor1window2.setAttribute("opacity","0.3");
    floor1window2.setAttribute("position","2.725 1.6 -7");
    floor1window2.setAttribute("height","4");
    floor1window2.setAttribute("width","2.7");
    floor1window2.setAttribute("depth","0.15");
    floor1window2.setAttribute("side","double");
    this.obj.append( floor1window2 );

    let floor1window3 = document.createElement("a-box");
    floor1window3.setAttribute("color","#D7DFD8");
    floor1window3.setAttribute("opacity","0.3");
    floor1window3.setAttribute("position","-0.3 1.6 -7");
    floor1window3.setAttribute("height","4");
    floor1window3.setAttribute("width","2.7");
    floor1window3.setAttribute("depth","0.15");
    floor1window3.setAttribute("side","double");
    this.obj.append( floor1window3 );

    let floor1window4 = document.createElement("a-box");
    floor1window4.setAttribute("color","#D7DFD8");
    floor1window4.setAttribute("opacity","0.3");
    floor1window4.setAttribute("position","-3.25 1.6 -7");
    floor1window4.setAttribute("height","4");
    floor1window4.setAttribute("width","2.7");
    floor1window4.setAttribute("depth","0.15");
    floor1window4.setAttribute("side","double");
    this.obj.append( floor1window4 );

    let floor1window5 = document.createElement("a-box");
    floor1window5.setAttribute("color","#D7DFD8");
    floor1window5.setAttribute("opacity","0.3");
    floor1window5.setAttribute("position","-5.925 1.6 -7");
    floor1window5.setAttribute("height","4");
    floor1window5.setAttribute("width","2.3");
    floor1window5.setAttribute("depth","0.15");
    floor1window5.setAttribute("side","double");
    this.obj.append( floor1window5 );

    
    

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

class Floor1Door{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
      
    // Door implementation

    let door = document.createElement("a-box");
    door.setAttribute("color","#8B4513");
    door.setAttribute("position","0 0 0");
    door.setAttribute("height","2.5");
    door.setAttribute("width","0.5");
    door.setAttribute("depth","0.25");
    this.obj.append( door );

    let floor1wall1 = document.createElement("a-box");
    floor1wall1.setAttribute("color","#B3B3B3");
    floor1wall1.setAttribute("position","0 3.6 0");
    floor1wall1.setAttribute("height","0.3");
    floor1wall1.setAttribute("width","14.8");
    floor1wall1.setAttribute("depth","0.25");
    floor1wall1.setAttribute("side","double");
    this.obj.append( floor1wall1 );

    let floor1wall2 = document.createElement("a-box");
    floor1wall2.setAttribute("color","#B3B3B3");
    floor1wall2.setAttribute("position","-7.25 2.1 0");
    floor1wall2.setAttribute("height","3.3");
    floor1wall2.setAttribute("width","0.35");
    floor1wall2.setAttribute("depth","0.25");
    floor1wall2.setAttribute("side","double");
    this.obj.append( floor1wall2 );

    let floor1wall3 = document.createElement("a-box");
    floor1wall3.setAttribute("color","#B3B3B3");
    floor1wall3.setAttribute("position","7.25 2.1 0");
    floor1wall3.setAttribute("height","3.3");
    floor1wall3.setAttribute("width","0.35");
    floor1wall3.setAttribute("depth","0.25");
    floor1wall3.setAttribute("side","double");
    this.obj.append( floor1wall3 );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}


class Building1{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let base = new Floor1Base(0,0,0);
    this.obj.append( base.obj );

    let wall1 = new Floor1Wall(0,0,0);
    this.obj.append( wall1.obj );

    let wall2 = new Floor1Wall(0,0,0);
    wall2.obj.setAttribute("rotation",{x:0, y:90, z:0});
    this.obj.append( wall2.obj );

    let wall3 = new Floor1Wall(0,0,0);
    wall3.obj.setAttribute("rotation",{x:0, y:-90, z:0});
    this.obj.append( wall3.obj );

    let door = new Floor1Door(0,0,7.125);
    this.obj.append( door.obj );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

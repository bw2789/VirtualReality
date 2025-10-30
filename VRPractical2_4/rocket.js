class Rocket {
  constructor(x, y, z) {
    this.y = 0;
    this.dy = Math.random() * 0.05 + 0.02; 

    
    this.obj = document.createElement("a-entity");

    let cone = document.createElement("a-cone");
    cone.setAttribute("radius-bottom", "0.3");
    cone.setAttribute("height", "0.6");
    cone.setAttribute("color", "red");
    cone.setAttribute("position", "0 0.8 0");
    this.obj.append(cone);

    let body = document.createElement("a-cylinder");
    body.setAttribute("radius", "0.2");
    body.setAttribute("height", "1.2");
    body.setAttribute("color", "gray");
    body.setAttribute("position", "0 0 0");
    this.obj.append(body);
    
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }

  launch() {
    this.y += this.dy;
    this.obj.setAttribute("position", {x:0, y:this.y, z:0});
  }
}
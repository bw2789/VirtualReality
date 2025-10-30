class UFO {
  constructor(x, y, z) {
    this.dy = Math.random() * 0.05 + 0.02; 
    this.obj = document.createElement("a-entity");

    let dome = document.createElement("a-sphere");
    dome.setAttribute("radius", "0.4");
    dome.setAttribute("color", "silver");
    dome.setAttribute("position", "0 0.3 0");
    this.obj.append(dome);

   
    let disc = document.createElement("a-cylinder");
    disc.setAttribute("radius", "0.6");
    disc.setAttribute("height", "0.2");
    disc.setAttribute("color", "gray");
    disc.setAttribute("position", "0 0 0");
    this.obj.append(disc);

    const scene = document.querySelector("a-scene");
    this.obj.setAttribute("position", { x, y, z });
    scene.append(this.obj);
  }

  invade() {
    let pos = this.obj.getAttribute("position");
    if (pos.y > 0) { 
      pos.y -= this.dy;
      this.obj.setAttribute("position", pos);
    }
  }
}
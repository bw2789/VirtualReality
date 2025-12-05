class Block{
  constructor(x,z){
    this.ds = -0.01;
    let template = document.getElementById('spider-template');
    this.obj = template.cloneNode(true);
    this.obj.setAttribute('position',{x:x,y:0.5,z:z});
    scene.append(this.obj);
  }
  
  shrink(){
    if(this.shot){
      let dx = (Math.random() * 10) - 10;
      let dz = - (Math.random() * 8 + 10);
      this.obj.setAttribute('position', {x: dx, y: 0.5, z: dz});
      this.shot = false;
    }
  }
}
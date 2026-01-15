let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, fireball1;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  // let Floor1Wall1 = new Floor1Wall(0.5, -0.5, 0.5);

  let building1 = new Building1(0.5,-0.43,0.5);
  // let building2 = new Building1(18.5,-0.43,0.5);

  window.addEventListener("keydown",function(e){
    if(e.key === " "){
      fireball1 = new Fireball();
    }
  });
  
})

function loop(){
  if(fireball1){
    fireball1.fire();
  }
  window.requestAnimationFrame(loop);
}


function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
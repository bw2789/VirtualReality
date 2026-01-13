let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  // let Floor1Wall1 = new Floor1Wall(0.5, -0.5, 0.5);

  let building1 = new Building1(0,-0.43,0);
})
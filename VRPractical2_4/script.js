let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket = [ ] ;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

 
  rocket = new Rocket(0,0)
  
  
  
  

  loop();
})

function loop(){
  rocket.fly()
  

  
  window.requestAnimationFrame( loop );
}

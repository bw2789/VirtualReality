let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket = [ ] ;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  rocket = new rocket( 0,0,0);
  rocket.push(rocket);

  


  loop();
})

function loop(){
  rocket.fly();
  
  window.requestAnimationFrame( loop );
}

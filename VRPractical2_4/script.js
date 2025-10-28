let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket = [ ] ;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let rocket = new Rocket(x,z);
    rocket.push(rocket);
  }
  
  

  loop();
})

function loop(){
  for(let rocket of rocket){
    rocket.fly();
  }

  
  window.requestAnimationFrame( loop );
}

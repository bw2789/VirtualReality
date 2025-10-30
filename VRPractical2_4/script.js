let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket = [ ] ;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

 

  for(let i=0; i <=100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let rocket = new Rocket(x, 0 , z);
  }

  
  
  
  
  

  loop();
})

function loop(){
  for(let rocket of rocket){
    rocket.fly();
  }
  
  

  
  window.requestAnimationFrame( loop );
}

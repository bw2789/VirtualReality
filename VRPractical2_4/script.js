let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket = [ ] ;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  for(let i = 0; i < 10; i++){
    let rocket = new Rocket( 0,0,0);
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

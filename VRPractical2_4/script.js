let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket = [ ] ;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let y = rnd(20,25)
    let rocket = new Rocket(x, y, z);
    let house = new House(x1, 0 , z1);
  }

  
  

  //loop();
})

// function loop(){
 
  

  
//   window.requestAnimationFrame( loop );
// }
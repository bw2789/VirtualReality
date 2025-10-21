
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector.
  pokeball = document.querySelector("#pokemonball");
  rocket = document.querySelector("#rocket");
  car = document.querySelector("#car");
  dude = document.querySelector("#dude");
  sun = document.querySelector("#sun");

  car.a = 0;
  car.da = -0.05;
  rocket.a = 0;
  rocket.da = 0.1;
  pokeball.a = 0;
  pokeball.da = 1;
  dude.a = 1;
  dude.da = 0.01;
  sun.a = 0;
  sun.da = 0.01;
  
  loop();
})

function loop(){
  pokeball.a += pokeball.da;
  rocket.a += rocket.da;
  car.a += car.da;
  dude.a += dude.da;
  sun.a += sun.da;

  sun.setAttribute("opacity",sun.a % 1);
  pokeball.setAttribute("rotation",{x:0, y:pokeball.a, z:0});
  rocket.setAttribute("position",{x:0, y:rocket.a, z:0});
  car.setAttribute("position",{x:car.a, y:0, z:0});
  dude.setAttribute("scale",{x:dude.a, y:dude.a, z:dude.a});
  window.requestAnimationFrame(loop);
}

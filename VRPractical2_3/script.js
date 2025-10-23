let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 200; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let x1 = rnd(-40,40);
    let z1 = rnd(-40,40);
    let y = rnd(20,25)
    let tree = new Tree(x, 0 , z);
    let cloud = new Cloud(x1, y , z1);
    let cloud2 = new Cloud(x , y , z);
    let house = new House(x1, 0 , z1);
  }



 

})

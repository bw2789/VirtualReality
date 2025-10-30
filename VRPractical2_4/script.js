let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufos = [];
let gridSize = 50
let spacing = 4;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = (i - gridSize / 2) * spacing;  
      let z = (j - gridSize / 2) * spacing;  
      let y = Math.random() * -3 - 1;        
      let r = new Rocket(x, y, z);
      rockets.push(r);
    }
  }
  
  for (let i = 0; i < 20; i++) {
    let x = Math.random() * 40 - 20;
    let y = Math.random() * 10 + 10;
    let z = Math.random() * 40 - 20;
    let u = new UFO(x, y, z);
    ufos.push(u);
  }

  loop();
});

function loop() {
  for (let r of rockets) {
    r.launch();
  }
  
  for (let u of ufos) {
    u.invade();
  }
  window.requestAnimationFrame(loop);
}

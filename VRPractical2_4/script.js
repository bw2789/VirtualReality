let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for (let i = 0; i <= 100; i++) {
    let x = rnd(-100, 100);
    let z = rnd(-100, 100);

    let r = new Rocket(x, 0, z);
    rockets.push(r);
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

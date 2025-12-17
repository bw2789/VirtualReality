let rnd = (l,u) => Math.random()*(u-l)+l;
let scene;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  // //Challenge 2: Create 200 Balls at random locations and watch them fall or push them off the end
  for(let i = 0; i < 200; i++) {
    let ball = document.createElement("a-sphere");
    ball.setAttribute("radius","0.1");
    ball.setAttribute("color",`hsl(${rnd(0,360)},100%,50%)`);
    ball.setAttribute("position",`${rnd(-10,10)} ${rnd(10,20)} ${rnd(-10,10)}`);
    ball.setAttribute("dynamic-body","");
    scene.appendChild(ball);
  }

  // let nade = document.createElement("a-asset-item");
  // nade.setAttribute("id","nade");
  // nade.setAttribute("src","assets/nade.glb");
  // scene.appendChild(nade);

  for(let i = 0; i < 10; i++) {
    let ball = document.createElement("a-gltf-model");
    ball.setAttribute("src","#nade");
    ball.setAttribute("scale","0.1 0.1 0.1");
    ball.setAttribute("position",`${rnd(-10,10)} ${rnd(10,20)} ${rnd(-10,10)}`);
    ball.setAttribute("dynamic-body","");
    scene.appendChild(ball);
  }

  // for(let i = 0; i < 10; i++) {
  //   let ball = document.createElement("a-gltf-model");
  //   ball.setAttribute("src","#nade");
  //   ball.setAttribute("scale","0.1 0.1 0.1");
  //   ball.setAttribute("position",`${rnd(-10,10)} ${rnd(10,20)} ${rnd(-10,10)}`);
  //   ball.setAttribute("dynamic-body","");
  //   scene.appendChild(ball);
  // }



  
})
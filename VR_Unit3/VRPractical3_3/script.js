let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_hits = 0;
let game_over = false, time_remaining = 30;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");

  

  for(let i=0;i<5;i++){
    let x = rnd(-20,20);
    let z = - rnd(20,40);
    enemies.push(new Block(x,z));
  }

  window.addEventListener("keydown",function(e){
    if((e.code == "Space" || e.key == " ") && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
      updateUI();
    }
  })
  
  window.requestAnimationFrame(loop);
  setTimeout(countdown,1000);
  updateUI();
    setTimeout(spawnAmmo, rnd(8,15) * 1000);
})

  function spawnAmmo(){
    if (game_over) return;
    let x = rnd(-20,20);
    let z = - rnd(10,40);
    new BulletBox(x, 0.5, z);
    setTimeout(spawnAmmo, rnd(8,15) * 1000);
  }

function loop(){
  if(bullet){
    bullet.fire();
  }

  for(let enemy of enemies){
    if(bullet && distance(bullet.obj,enemy.obj) < 1){
      enemy.shot = true;
      enemy_hits++;
      console.log("Enemy hit: " + enemy_hits);
      scene.removeChild(bullet.obj);
      bullet = null;
    }
    enemy.shrink();
  }

  for(let i = ammo_boxes.length - 1; i >= 0; i--){
    let b = ammo_boxes[i]
    if(distance(camera, b.obj) < 2){ 
      b.pickup()
    }
  }
  window.requestAnimationFrame(loop)
}

function countdown(){
  if (!game_over) {
    time_remaining--;
    updateUI();

    if (time_remaining <= 0) {
      endGame(false);
    } else {
      setTimeout(countdown, 1000);
    }
  }
}

 
function updateUI(){
  let out = document.querySelector('#output');
  if(out){
    out.setAttribute('value', `Ammo: ${ammo_count}  Time: ${time_remaining}s  Hits: ${enemy_hits}`);
  }
}

function endGame(won){
  game_over = true;
  let out = document.querySelector('#output');
  if(out){
    out.setAttribute('value', won ? 'You win!' : 'Game over');
  }
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
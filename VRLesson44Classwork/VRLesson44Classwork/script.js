let scene, boxes = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  /* Challenge
     Create 10 random boxes through the world
  */
  for(let i=0; i<10; i++){
    let box = document.createElement("a-box");
    box.setAttribute("color", "red");
    box.setAttribute("position", `${Math.random()*10-5} ${Math.random()*10-5} ${Math.random()*10-5}`);
    boxes.push( box );
    scene.appendChild( box );
  }
  loop();
 
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  boxes.forEach( box => {
    let pos = box.getAttribute("position");
    box.setAttribute("position", `${pos.x} ${pos.y+0.1} ${pos.z}`);
  });
  window.requestAnimationFrame( loop )
  
}
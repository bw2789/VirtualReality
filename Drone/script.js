let rnd = (l,u) => Math.random() * (u-l) + l
let scene, drones = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mainCamera = document.getElementById("mainCamera");
  
  drones.push( new Drone( 0, 2, 0 ) );
  
  // Keyboard event listener for switching cameras
  window.addEventListener("keydown", function(event) {
    if(event.key.toLowerCase() === "r") {
      if(drones.length > 0) {
        // Disable main camera
        mainCamera.setAttribute("active", false);
        // Enable drone camera
        drones[0].camera.setAttribute("active", true);
      }
    }
  });
  
  loop();
});

function loop(){
  for(let d of drones){
    d.fall();
  }
  window.requestAnimationFrame(loop); 


}


// movement(){
//     window.addEventListener("keydown", function() {
//     if(event.key == " "){
//       this.y += this.dy;
//       this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
//     } else{
//       this.y -= 0.01;
//       this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
//     }
//   }.bind(this) );
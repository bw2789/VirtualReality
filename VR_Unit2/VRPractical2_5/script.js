/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xx-xxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xx-xx--------------------------------x----------------------------------------xxxxxxxxxx",
  "xx----xxxxxx-xxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
  "xxxxxxxxxxxx---xxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxx-xxxxxx----------xxxxxxxxxxxxxxxxx-xxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxx-xxxxxx-xxxxxxxx-xxxxxxxxxxxxxxxxx--xxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxx-----xx-xxxxxxxx-xxxxxxxxxxxxxxxxxx--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxx-xxxx-xxxxxxxx----x----------------------------------------xxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxx-xxxx-xxxxxxxx-x-xx-xxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxx-xxxxxxxxxx-xx-xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxx------------------xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx------------xxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------xxxxxxxxxxxxx-xxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxx-----xxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-----xxxxxxxxxxxxxx----xxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------xxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxx-xxxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxx-------------------------------------xxxxxxxxx---x-x---xxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------xxxxxx-xxxxxxxxxxxxxx",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxx"
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;
mech = document.getElementById("mech-1");

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

  clone = mech.cloneNode(true);
  clone.setAttribute("id","mech-"+(i+2));
  clone.setAttribute("position",{x:1,y:13,z:1});
  scene.appendChild(clone);
  
  loop();

  function loop() {
    window.requestAnimationFrame(loop);
  } 




})
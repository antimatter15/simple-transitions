var anim_running = false;

var current = document.getElementById("page1");
var next = document.getElementById("page2");



function transition(name){
  if(anim_running) return false; else anim_running = true;
  //do not animate if its animating
  
  current.className = 'out '+name;
  current.style.zIndex = -1;
  next.style.zIndex = 1;
  next.className = 'in '+name;

  setTimeout(function(){
    anim_running = false;
  }, 500);

  //classic swapping of 2 vars
  var swapper = current;
  current = next;
  next = swapper;
  
}

setInterval(function(){
  transition("slide");
},2000);

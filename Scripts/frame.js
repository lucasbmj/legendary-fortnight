var can = document.getElementById('well');
var title = document.getElementsByClassName('title');
var weltxt = document.getElementsByClassName('welcome-text');
var pull = document.getElementById('pull');
var nav = document.getElementsByClassName('nav-box');

// Initial Positioning;
can.width = window.innerWidth;
can.height = window.innerHeight;
title[0].style.top = (can.height*10)/100+"px";
title[0].style.fontSize = (can.height*1.3)/100+"em";


nav[0].style.width="100%";

// weltxt[0].style.top = (can.height*50)/100+"px";
weltxt[0].style.fontSize = (can.height*0.3)/100+"em";


// Resizing and reposition;
window.addEventListener("resize", function(){
  can.width = window.innerWidth;
  can.height = window.innerHeight;
  title[0].style.fontSize = (can.height*1.3)/100+"em";
  title[0].style.top = (can.height*10)/100+"px";


  nav[0].style.width="100%";

  // weltxt[0].style.top = (can.height*60)/100+"px";
  weltxt[0].style.fontSize = (can.height*0.3)/100+"em";
});

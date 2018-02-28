// window.addEventListener("scroll", function(){
//   console.log(window.pageYOffset);
// });
// var dug = document.getElementsByTagName('section');

function pass(x){
 if(window.pageYOffset < x){
   let tim = setInterval(down,1);
   function down(){
     if(window.pageYOffset>=x){
       clearInterval(tim);
       window.scrollTo(0,x);
     }else{
       window.scrollBy(0,15);
     }
   }
 }

 else{
   let tim = setInterval(up,5);
   function up(){
     if(window.pageYOffset<=x){
       clearInterval(tim);
       window.scrollTo(0,x);
     }else{
       window.scrollBy(0,-15);
     }
   }

 }
}

var btn= document.getElementsByClassName("menu");

function menuWhere(){
if (window.pageYOffset >= 0 && window.pageYOffset < 597){
  for(let i=0; i<btn.length;i++){
    btn[i].style.color="white";
    btn[i].style.textDecoration="none";
  }
  btn[0].style.color="#2361c4";
  btn[0].style.textDecoration="underline";
}

else if (window.pageYOffset >= 597 && window.pageYOffset < 1263) {
  for(let i=0; i<btn.length;i++){
    btn[i].style.color="white";
    btn[i].style.textDecoration="none";
  }
  btn[1].style.color="#2361c4";
  btn[1].style.textDecoration="underline";
}

else if (window.pageYOffset >= 1263 && window.pageYOffset < 1873) {
  for(let i=0; i<btn.length;i++){
    btn[i].style.color="white";
    btn[i].style.textDecoration="none";
  }
  btn[2].style.color="#2361c4";
  btn[2].style.textDecoration="underline";
}
else if (window.pageYOffset >= 1873) {
  for(let i=0; i<btn.length;i++){
    btn[i].style.color="white";
    btn[i].style.textDecoration="none";
  }
  btn[3].style.color="#2361c4";
  btn[3].style.textDecoration="underline";
}


}

window.addEventListener("scroll", function(){
  menuWhere();
})

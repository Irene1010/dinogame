function jump(){
  var dino=document.getElementById("dino");
  var block=document.getElementById("block");
   if(event.keyCode==32){
     dino.classList.add("animate");
   }
   setTimeout(function(){ dino.classList.remove("animate"); }, 500);
}
var counter=0;
var checkDead = setInterval(function(){
    var dino=document.getElementById("dino");
    var block=document.getElementById("block");

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if(blockLeft<=90 && blockLeft>=15 && dinoTop>=170){
      block.style.animation="none";
      alert("GAME OVER / SCORE: "+Math.floor(counter/100));
      counter=0;
      block.style.animation="blockComes 1.5s infinite";
    }else{
      counter++;
      document.getElementById('score').innerHTML=Math.floor(counter/100);
    }
   }, 10);

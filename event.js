//Use in MOD EVENT ONCLICK
/*var element;
document.getElementById("header").onclick=abc;
function abc(){
  document.getElementById("header").style.backgroundColor="green"  
}*/ 
//USE IN MOUSEENTER;
/*var element;
document.getElementById("header").onmouseenter=xyz;
function xyz(){
    document.getElementById("header").style.backgroundColor="yellow"
}*/
var element;
document.getElementById("header").addEventListener("click",abc);
function abc(){
  document.getElementById("header").classList.toggle("xyz");
  var a = document.getElementById("header").classList;
  console.log(a);
}
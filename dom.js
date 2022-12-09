//var element;
//element=document.all[10];
//element=document.head;
//element=document.links[4];
//element=document.images;
//element=document.URL;
//element=document.domain;
//element=document.getElementById("header");
//document.getElementsByClassName("demo");
//console.log(element);
//element=document.getElementById("header").innerText;
//document.getElementById("header").innerHTML;
//element=document.getElementById("content").innerText;
//element=document.getElementById("header").getAttribute("class");
//<!get attribute value uthata hai khali--->
//element=document.getElementById("header").getAttribute("style");\
//getAttributeNode value or name dono uthaleta hai 
//element=document.getElementById("header").getAttributeNode("style").value;
//use in  attribute all header ki value utha leta hai
//element=document.getElementById("header").attributes[0].value;\
//use in  gete method in javascript any value
//document.getElementById("header").innerHTML="<h1> Hello World </h1>";
//element=document.getElementById("header").innerHTML;
//use in setattribute in class change
document.getElementById("header").innerHTML="<h1> Junaid Jamshed</h1>";
document.getElementById("header").setAttribute("class","xyz");
//document.getElementById("header").setAttribute("style","border:5px groove yellow");
document.getElementById("header").attributes[2].value="border:10px double blue";
//document.getElementById("header").removeAttribute("style");
//document.getElementById("header").;removeAttribute("class");
element=document.getElementById("header").getAttribute("class");
console.log(element);

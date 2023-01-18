 alert("don't make noise in class")
 console.log("Hello from the other side")
 console.log(document.getElementById("paragraph").innerHTML);
 document.getElementById("paragraph").innerHTML="<h1> Hello World</h1>";
//  document.getElementById("paragraph").style.color="purple";
//  document.getElementById("paragraph").style.background="black";
document.getElementById("paragraph").style.cssText="color=purple; background=aqua";

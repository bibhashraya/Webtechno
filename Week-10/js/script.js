// document.getElementById("p1").innerHTML="Yo this is the tenth workshop";
// document.getElementById("p1").style.backgroundColor="aqua";
// document.getElementsByClassName("p1")[1].innerHTML="This is the tenth workshop";
// var p1 = getElementsByClassName("p1");
// for(var i = 0; i < p1.length; i++)
// {
//    Distribute(p1[i]);
// }
document.getElementsByTagName("h1")[1].innerHTML="getElementsByTagName";
var select = document.getElementsByClassName("p1");
for(var i=0; i<=select.length; i++ ){
    select[i].innerHTML="This is the tenth woskshop";
    select[i].style.cssText="background-color:plum; color:white;font-size:30px;";
}
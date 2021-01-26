var color1=document.getElementsByClassName("color1")[0]
var color2=document.getElementsByClassName("color2")[0]
var body=document.getElementById("gradient")

color1.addEventListener("input",call)
color2.addEventListener("input",call)
function call(){
    body.style.background=
    "linear-gradient(to right,"
    +color1.value
    +","
    +color2.value
    +")";
}
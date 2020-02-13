function calculatetip(){
var bill=document.getElementById("bill").value;
var s=document.getElementById("s").value;
var p=document.getElementById("p").value;

if (bill=== ""|| s==0){
alert("please enter value");
return;
}
if(p=== "" || p<=1){
p=1;
document.getElementById("each").style.display="none";
}
else{
document.getElementById("each").style.display="block";
}

var total=(bill*s)/p;
total=Math.round(total);
document.getElementById("totaltip").style.display="block";
document.getElementById("tip").innerHTML=total;

}

document.getElementById("totaltip").style.display="none";

document.getElementById("calculate").onclick=function(){
calculatetip();
}
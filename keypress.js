var txt=document.getElementById("txt");
var btn=document.getElementById("btn");
var bodyArr=document.getElementsByTagName("body");
if(bodyArr == null || bodyArr.length == 0){
	alert("nobody found");
}
bodyArr[0].addEventListener("keypress",keyHandler)
btn.addEventListener("click",clear)


function keyHandler(eve){
	txt.innerHTML +=eve.key.toUpperCase();
}

function clear(eve){
   txt.innerHTML = "";
}
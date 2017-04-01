
// #1
var txt=document.getElementById("argue");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
function myFunction(name) {
		txt.innerHTML="I\'m right!";
}

function myFunction1(name) {
	    txt.innerHTML="No, I\'m right!";
}
argue.addEventListener("click",myFunction);
btn1.addEventListener("click",myFunction);
btn2.addEventListener("click",myFunction1);

// #2

document.getElementById("told").addEventListener("mouseover", onClick);

function onClick(event) {
	alert("Hey, I told you not to hover over me!");
}




function myFunction2() {
	window.getElementById("gr").innerHTML = String.fromCharCode(event.charCode);
}

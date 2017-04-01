
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var input = document.getElementById("text");
  var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
  var re = /[0-9]+/;
   if (password === "1234567" && username.match(re)) {
      alert("Welcome to my page");
      input.innerHTML="Please stay on my page";
   } else {
        alert("Invalid Password or Username or Both");
}
});

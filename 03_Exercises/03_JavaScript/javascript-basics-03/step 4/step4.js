let pass1 = document.getElementById("password");
let pass2 = document.getElementById("confirmation");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  if (pass1 !== pass2) {
    pass1.style.border = "2px solid red";
    pass2.style.border = "2px solid red";
  } else pass1.style.border = "2px solid green";
  pass2.style.border = "2px solid green";
});

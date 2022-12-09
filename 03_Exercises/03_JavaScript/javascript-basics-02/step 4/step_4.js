document.querySelector("button").addEventListener("click", function () {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("city").value = "";
});
document.querySelector("button").addEventListener("click", function () {
  const response = confirm("Are you sure you want to do that?");
  console.log(response);
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("city").value = "";
});

const div = document.getElementById("text");
const divs = document.querySelectorAll(".color");
divs.forEach(function (el) {
  el.addEventListener("click", function () {
    if (el.className === "color green") {
      div.style.color = "green";
    } else if (el.className === "color red") {
      div.style.color = "red";
    } else {
      div.style.color = "blue";
    }
  });
});

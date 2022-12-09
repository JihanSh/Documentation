const div = document.getElementById("texte");
const sh = document.querySelectorAll("a");
sh.forEach(function (el) {
  el.addEventListener("click", function () {
    if (el.id == "hide") div.style.display = "none";
    else {
      div.style.display = "block";
    }
  });
});

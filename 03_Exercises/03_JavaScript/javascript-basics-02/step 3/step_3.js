const div = document.createElement("div");
var i = document.getElementById("name");
i.addEventListener("change", function () {
  div.innerText = "OMAR";
  document.body.append(div);
});

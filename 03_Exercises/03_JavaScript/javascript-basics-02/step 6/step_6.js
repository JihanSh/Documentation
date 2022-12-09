document.addEventListener("mouseover", function () {
  document.getElementById("image1").src = "images/image1_2.jpg";
  document.getElementById("image2").src = "images/image2_2.jpg";
  document.getElementById("image3").src = "images/image3_2.jpg";
  document.getElementById("image4").src = "images/image4_2.jpg";
  document.getElementById("image1").src = "images/image5_2.jpg";
});
document.addEventListener("mouseout", function () {
  document.getElementById("image1").src = "images/image1.jpg";
  document.getElementById("image2").src = "images/image2.jpg";
  document.getElementById("image3").src = "images/image3.jpg";
  document.getElementById("image4").src = "images/image4.jpg";
  document.getElementById("image1").src = "images/image5.jpg";
});

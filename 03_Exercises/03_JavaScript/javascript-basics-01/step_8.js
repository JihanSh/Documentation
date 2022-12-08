function grade() {
  var Grade = prompt("Please enter your age: ");
  Grade = isNaN(Grade) || Grade.trim() === "" ? 0 : +Grade; // force number if "Not a Number" or an empty string
  if (Grade >= 18) {
    alert("You'r older than 18");
  } else {
    alert("your under 18");
  }
}
grade();

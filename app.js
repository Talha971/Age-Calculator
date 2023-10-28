var currentDate = new Date();
var a = currentDate.getFullYear();
var c = currentDate.getMonth();
var e = currentDate.getDay();

var k = document.getElementById("xyz");
k.addEventListener("click", function () {
  var dob = new Date(prompt("enter date of birth for eg: (2020,10,12)"));
  var b = dob.getFullYear();
  var d = dob.getMonth();
  var f = dob.getDay();

  document.write(
    " you are " +
      (a - b) +
      " years, " +
      (c - d) +
      " months & " +
      (e - f) +
      " days old!!"
  );
});
// //////////////////////////////////////////// finding your of birth year /////////////////////////////////////////////////
var g = new Date();
var h = g.getFullYear();
console.log(h);
var j = document.getElementById("abc");
j.addEventListener("click", function () {
  var i = +prompt("enter your age");
  document.write("You were born in " + (h - i) + " AD");
});

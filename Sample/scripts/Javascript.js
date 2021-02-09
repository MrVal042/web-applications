var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function(a, b) { return a - b });
  document.write(Date());
}

function letMeCallYou()
{
  alert("Bazinga!!!  you called letMeCallYou")
}
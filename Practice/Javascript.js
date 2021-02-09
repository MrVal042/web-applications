/*var points = [40, 100, 1, 5, 25, 10];

function myFunct() {
document.getElementById("demo").innerHTML = points;
}

function myFunction() {
  points.sort(function(a, b) { return a - b });
  document.write(Date());
}
*/

var weekdays = new Date().getDay();
var hour = new Date().getHours();
var minutes = new Date().getMinutes();
weekName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
todayIs = weekName[weekdays];

/*function checkWeekdays() {
if (weekdays == 0) {alert("True")} else {alert("False");}
alert(
}
*/

function checkOrder() {
if ( weekdays == 0 && hour >= 12 && minutes >= 30 || hour <= 19 && minutes <= 30) {
  window.alert(" " + todayIs + "'s Order Added Successfully" );}
 else if (weekdays == 0 && hour <= 12 && minutes < 30 || hour >= 19 && minutes > 30) {
 alert("Oops!..Today is " + todayIs + ", we take order from 12:30pm to 7:30pm") ;}
  //check if today is saturday
 else if  ( weekdays == 6 && hour >= 9 && minutes >= 00 || hour <= 20 && minutes <= 30) {
  alert(" " + todayIs + "'s Order Added Successfully val" );}
  else if  ( weekdays == 6 && hour <= 9 && minutes < 00 || hour >= 20 && minutes > 30) {
  alert("Oops!..Today is " + todayIs + ", we take order from 9:00am to 8:30pm" );}
  //check other days of the weeks
 else if  ( weekdays != 0 && 6 && hour >= 7 && minutes >= 30 || hour <= 21 && minutes <= 00) {
  alert("" + todayIs + "'s Order Added Successfully error" );}
 else if  ( weekdays != 0 && 6 && hour <= 7 && minutes < 30 || hour >= 21 && minutes > 00) {
  alert("Oops!..Today is " + todayIs + ",...Order starts from 7:30am to 9:00pm" );}
 else { alert("System updates!!!... Sorry for the inconvineces");}
 }


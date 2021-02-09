window.onload = function() { getTime(); }

//function msg(){
  //alert('Mr Val can code javascript');
//}

function getTime() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  
  var today = new Date();
  var h = today.getHours();
  
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10  
  m = checkTime(m);
  s = checkTime(s);
  //document.write(" Date is: " + day + "/" + month + "/" + year);
  
// document.write(" Mr Val can code javascript")
  
  setTimeout(function() { getTime() }, 1000);
}
//setInterval("getTime()",1000);//another way  
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
document.write(index.html)
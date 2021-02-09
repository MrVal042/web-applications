//-check order global fariables
let weekdays = new Date().getDay();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
weekName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
todayIs = weekName[weekdays];

//--changing image global variable
let myImage = document.querySelector('img');

// Image switcher code
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === './images/4x6.jpg') {
    myImage.setAttribute ('src','./images/Shaggy.jpg');
  } else {
    myImage.setAttribute ('src','./images/4x6.jpg');
  }
}

//--check order function
function checkOrder() {
  if (weekdays === 0) {
    if ((hour >= 12 && minutes >= 30) || (hour <= 19 && minutes <= 30)) {
      window.alert("" + todayIs + "'s Order Added Successfully");
    } else {
      window.alert("Oops!.... Today is " + todayIs + ", we take order from 12:30pm to 7:30pm");
    }
  }
  else if (weekdays === 6) {
    if ((hour >= 9 && minutes >= 0 ) || ( hour <= 20 && minutes <= 30)) {
      window.alert("" + todayIs + "'s Order Added Successfully");
    }
    else {
      window.alert("Oops!.... Today is " + todayIs + ", we take order from 9:00am to 8:30pm");
    }
  } 
  else {
    if ((hour >= 7 && minutes >= 0) || (hour <= 20 && minutes <= 30)) {
      window.alert("" + todayIs + "'s Order Added Successfully");
    }
    else{
      window.alert("Oops!.... Today is " + todayIs + ", we take order from 7:00am to 8:30pm");
    }
  }
}


/*
//manual slide show

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}


/*
//automatic slides
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


//multiple slideshow

var slideIndex = [1,1];

// Class the members of each slideshow group with different CSS classes 
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
*/
var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2","mySlides3"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
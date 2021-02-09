//automatic slides controler
var autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
  var i;
  var autoSlides = document.getElementsByClassName("autoSlides");
  var autodots = document.getElementsByClassName("autoDot");
  for (i = 0; i < autoSlides.length; i++) {
    autoSlides[i].style.display = "none";  
  }
  autoSlideIndex++;
  if (autoSlideIndex > autoSlides.length) {autoSlideIndex = 1}    
  for (i = 0; i < autodots.length; i++) {
    autodots[i].className = autodots[i].className.replace(" autoactive", "");
  }
  autoSlides[autoSlideIndex-1].style.display = "block";
  autodots[autoSlideIndex-1].className += " autoactive";
  setTimeout(autoShowSlides, 2000); // Change image every 2 seconds
}

// .....imgGallary controller.....
var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var slideId = ["mySlides0", "mySlides1","mySlides2","mySlides3","mySlides4","mySlides5","mySlides6","mySlides7","mySlides8","mySlides9","mySlides10","mySlides11","mySlides12","mySlides13","mySlides14","mySlides15"]

showSlides(1, 0); showSlides(1, 1); showSlides(1, 2); showSlides(1, 3);showSlides(1, 4);
showSlides(1, 5); showSlides(1, 6); showSlides(1, 7);showSlides(1, 8); showSlides(1, 9);
showSlides(1, 10); showSlides(1, 11);showSlides(1, 12); showSlides(1, 13); showSlides(1, 14);
showSlides(1, 15);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no); 
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";}
    
  for (i = 0; i <dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  x[slideIndex[no]-1].style.display = "block"; 
}






// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//--check order function
function checkOrder() {
  // Add Cart function
  //-check order global fariables
  let weekdays = new Date().getDay();
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  weekName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  todayIs = weekName[weekdays];
  var modaltxt = document.getElementById('id02');
  document.getElementById('id01').style.display='block'
  if (weekdays === 0) {
    if ((hour >= 12 && minutes >= 30) || (hour <= 19 && minutes <= 30)) {
      modaltxt.innerHTML = ("" + todayIs + "'s Order Added Successfully");
    } else {
      modaltxt.innerHTML = ("Oops!.... Today is " + todayIs + ", we take order from 12:30pm to 7:30pm");
    }
  }
  else if (weekdays === 6) {
    if ((hour >= 9 && minutes >= 0 ) || ( hour <= 20 && minutes <= 30)) {
      modaltxt.innerHTML = ("" + todayIs + "'s Order Added Successfully");
    }
    else {
      modaltxt.innerHTML = ("Oops!.... Today is " + todayIs + ", we take order from 9:00am to 8:30pm");
    }
  } 
  else {
    if ((hour >= 7 && minutes >= 0) || (hour <= 20 && minutes <= 30)) {
      modaltxt.innerHTML = ("" + todayIs + "'s Order Added Successfully");
    }
    else{
      modaltxt.innerHTML = ("Oops!.... Today is " + todayIs + ", we take order from 7:00am to 8:30pm");
    }
  }
}

/*
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 




// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function() {
    return this.firstName + " " + this.lastName;
    };
  this.changeName = function (name) {
    this.lastName = name;
  };
}

// Create 2 Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


// Display full name
document.getElementById("demo").innerHTML =
"My father is " + myFather.name() + "<br>" +"My Mother is " + myMother.name();


//With call(), an object can use a method belonging to another object.
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
var x = person.fullName.call(person1); 
document.getElementById("demo").innerHTML = x; 

//JavaScript Closures
<h2>JavaScript Closures</h2>

<p>Counting with a local variable.</p>

<button type="button" onclick="myFunction()">Count!</button>

<p id="demo">0</p>

<script>
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo").innerHTML = add();
}
</script>


//class inheritance

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
*/

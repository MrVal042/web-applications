//--check if user stay or come back again

/*In index.html, add the following line just before the <script> element:

<button myButton.onclick = function() {
  setUserName();
}>Change user</button>

In main.js, place the following code at the bottom of the file, 
exactly as it is written. This takes references to the new button and
the heading, storing each inside variables:

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
Add the function below to set the personalized greeting.
This won't do anything yet, but this will change soon.

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

/*if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
*/

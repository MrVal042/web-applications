var hour;
var todayIs;
var notification;

function checkDay() {
  switch (new Date().getDay()) {
    case 0:
      todayIs = "Sunday";
      break;
    case 1:
      todayIs = "Monday";
      break;
    case 2:
      todayIs = "Tuesday";
      break;
    case 3:
      todayIs = "Wednesday";
      break;
    case 4:
      todayIs = "Thursday";
      break;
    case 5:
      todayIs = "Friday";
      break;
    case 6:
      todayIs = "Saturday";
      break;
  }
  document.getElementById("demo").innerHTML = "Oops!... Today is " + todayIs;
}

function checkTime() {
  checkDay();
  var hour = new Date().getHours();
  if (hour < 7) {
    notification = "Good morning...We takes order by 7am - 9pm on " + todayIs;
  } else if (hour > 21) {
    notification = "Sorry dear!... we can't take your order after 9pm, Today is " + todayIs;
  }
  else {notification = "Order Added Successfuly";}
  document.getElementById("demo").innerHTML = notification;
}

  function showMe() {
    document.getElementById('demo').style.display = 'block';
  }

  function hideMe() {
    document.getElementById('demo').style.display = 'none';
  }


  //---function with return statements--------------
  function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

  multiply(5,6)
  multiply(20,30)
  //-----------------------------

/*Real interactivity on a website requires events handlers.
 These are code structures that listen for activity in the browser,
and run code in response.*/

  document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
//--------------------------------

/*In this section, you will learn how to use JavaScript and DOM API
 features to alternate the display of one of two images.
This change will happen as a user clicks the displayed image. */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
//-------------------------------
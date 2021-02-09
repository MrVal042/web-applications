const logIn = document.getElementById("login");
const signUp = document.getElementById("signUp");
const leftSide = document.getElementById("leftMenu");

function LogF() {
  if (logIn.style.display === "none" && signUp.style.display === "none") {
    logIn.style.display = "block";
  } else(logIn.style.display === "none")
}

function userSwitch() {
  if (logIn.style.display === "block" && signUp.style.display === "none") {
    signUp.style.display = "block";
    logIn.style.display = "none";
  } else {
    signUp.style.display = "none";
    logIn.style.display = "block";
  }
}

function extBtn() {
  if (logIn.style.display === "block") {
    logIn.style.display = "none";
  } else {
    signUp.style.display = "none";
  }
}

function sideBar() {
  if (leftSide.style.display === "none") {
    leftSide.style.display = "block";
    document.getElementById("id01").style.width="69.999%";
    document.getElementById("id01").style.margin="0 10%";
  } else {
    leftSide.style.display = "none"; 
    document.getElementById("id01").style.width="79.999%";
    document.getElementById("id01").style.margin="0 20% 0 0";
  }
}
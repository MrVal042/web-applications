const newsf = document.getElementById("newsFeild")
const frequst = document.getElementById("frndRequest")
const grougs = document.getElementById("groups")
const userProfile = document.getElementById("userProfile")
const appMenu = document.getElementById("appMenu")


function addNew() {
  let inputDiv = document.getElementById("createPost");
  if (inputDiv.style.display === "none") {
    inputDiv.style.display = "block";
  } else {
    inputDiv.style.display = "none";
  }
}

function postInput() {
  let userInput = document.getElementById("cPostInput");
  let days = new Date().getDay();
  let hrs = new Date().getHours();
  let mins = new Date().getMinutes();
  let ampm = hrs >= 12 ? 'pm' : 'am';
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  txtDisplay = weekName[days] + ' ' + 'at' + ' ' + hrs + ':' + mins + '' + ampm;
  let getImg = document.getElementById(uploadImg)

  // create div element and attribute
  let createDiv = document.createElement("DIV");
  createDiv.setAttribute("id", "../slide image/img/Val.jpg");
  createDiv.setAttribute("class", "newsContainer");

  // create heading and attribute
  let createHeading = document.createElement("H6");
  let createHr = document.createElement("HR");
  let htxt = document.createTextNode(txtDisplay);
  createHeading.appendChild(htxt);
  createDiv.appendChild(createHeading);
  createDiv.appendChild(createHr);

  // create paragraph and  add text
  let createTxt = document.createElement("p");
  let bquoteTxt = document.createElement("blockquote");
  let ptxt = document.createTextNode(userInput.value);
  bquoteTxt.appendChild(ptxt);
  createTxt.appendChild(bquoteTxt);
  createDiv.appendChild(createTxt);

  // create image and attribute
  let createImg = document.createElement("IMG");
  createImg.setAttribute("src", "../slide image/img/Val.jpg");
  createImg.setAttribute("class", "imgCon");
  createDiv.appendChild(createImg);

  // create show likes and comments
  let slikDiv = document.createElement("DIV");
  let slkSpan = document.createElement("SPAN");
  let scomtSpan = document.createElement("SPAN");
  let showBr = document.createElement("BR");
  let showHr = document.createElement("Hr");
  let txt0 = document.createTextNode("0 like");
  let txt1 = document.createTextNode("0 comment");
  slkSpan.setAttribute("class", "showLikes");
  scomtSpan.setAttribute("class", "showComments");
  slkSpan.setAttribute("id", "like0");
  scomtSpan.setAttribute("id", "comt0");
  slkSpan.appendChild(txt0);
  scomtSpan.appendChild(txt1);
  slikDiv.appendChild(slkSpan);
  slikDiv.appendChild(scomtSpan);
  createDiv.appendChild(slikDiv);
  createDiv.appendChild(showBr);
  createDiv.appendChild(showHr);

  // create like, comments and share button
  let likDiv = document.createElement("DIV");
  let lkbtn = document.createElement("BUTTON");
  let comtbtn = document.createElement("BUTTON");
  let sharebtn = document.createElement("BUTTON");
  let btnHr = document.createElement("Hr");
  let lktxt = document.createTextNode("like");
  let comtxt = document.createTextNode("comment");
  let sharetxt = document.createTextNode("share");
  lkbtn.setAttribute("class", "likesbtn");
  comtbtn.setAttribute("class", "commentsbtn");
  sharebtn.setAttribute("class", "sharebtn");
  lkbtn.setAttribute("id", "likebtn");
  comtbtn.setAttribute("id", "comtbtn");
  sharebtn.setAttribute("id", "sharebtn");
  lkbtn.appendChild(lktxt);
  comtbtn.appendChild(comtxt);
  sharebtn.appendChild(sharetxt);
  likDiv.appendChild(lkbtn);
  likDiv.appendChild(comtbtn);
  likDiv.appendChild(sharebtn);
  createDiv.appendChild(likDiv);
  createDiv.appendChild(btnHr);

  // adds all created element to html
  let parant = document.getElementById("parent");
  parant.appendChild(createDiv);

  // likes and comments variabls
  let slike = document.getElementById("like0");
  let ltbtn = document.getElementById("likebtn");
  let sComment = document.getElementById("comt0");
  let combtn = document.getElementById("comtbtn");
  ltbtn.addEventListener('click', likeFunction)
  comtbtn.addEventListener('click', commentFunction)

  function likeFunction() {
    slike.innerHTML = parseInt(slike.innerHTML) + 1 + ' ' + 'likes';
  }

  function commentFunction() {
    sComment.innerHTML = parseInt(sComment.innerHTML) + 1 + ' ' + 'comments';
  }

  // controls the post frame
  addNew()
}
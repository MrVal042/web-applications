
// ****  SELECT ELEMENT FOR AN EVENT *********************************
const inputTxt = document.getElementById('textInput');
const alert = document.querySelector('.alert');
const addbtn = document.querySelector('.addBtn');
const itemCont = document.querySelector('.itemContainer');
const list = document.querySelector('.item-list');
const clearAllbtn = document.querySelector('.clearAllCon');
const footertxt = document.querySelector('.foot');
const id = new Date().getTime().toString();
// global declaration....
let editElement;
let editFlag = false;
let editID = "";
let count = 0;

// **** CREATE AND ADD FOOTER ************************************* 
const footelement = document.createElement('div');
const year = new Date().getFullYear()
footelement.innerHTML = ` Mr Val 042 &copy ${year} 
<a href="https://github.com/MrVal042"> www.mrval042.Com</a><br>
  <hr>
    <a href="#">Contacts</a> | <a href="#">Services</a> |
    <a href="#">Terms</a> | <a href="#">Privacy</a><br>
 <hr>
 <div>
    <a href="https://m.facebook.com/story.php?story_fbid=1645107355663498&id=100004927487683">@ facebook </a>
    <a href="https://twitter.com/ThisInspiresUs/status/1292526091438043142?s=19">@twitter </a>
    <a href="https://www.instagram.com/p/CEVmY8pBwAr/?igshid=fsb61oelo46d">@instagram</a>
 </div>`;
// append child element to the parant element........
footertxt.appendChild(footelement);
// **** ADD GLOBAL LISTENER  **************************************** 
// add items...........
addbtn.addEventListener('click', addItems);
// clear items.........
clearAllbtn.addEventListener('click', clearItems)


//  ****  FUNCTIONS  ************************************************ 
// add item function.........
function addItems() {
  const value = inputTxt.value;
  // check if input value = true and edit btn = false...........
  if (value && !editFlag) {
    // head count gerator........
    if (count === count) {
      count++;
    }
    // Create an element...............
    const element = document.createElement('article');
    // add class to created element.........
    element.classList.add('item');
    // add id attribute.......
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    // add html element to created element....
    element.innerHTML = `
      <h4 class="head">Note${count}<span class="close">x</span></h4>
        <blockquote class="content">
          <p>${value}</p>
        </blockquote>
      <div class="btnCon">
        <span class="checkBtn">
        <span class="edit ">Edit</span>
        <span class="done  ">Done</span>
      </span>
      </div> `;
   // select the created element for events..........
   const deleteBtn = element.querySelector('.close');
   const editBtn = element.querySelector('.edit');
   // add event listener to the created element..........
   const doneBtn = element.querySelector('.done');
   deleteBtn.addEventListener('click', deleteItem);
   editBtn.addEventListener('click', editItem);
   doneBtn.addEventListener('click', doneItem);
   // append child element to the parant element........
   list.appendChild(element);
   // display alert............
   displayAlert("items added successfully..", "success");
   // show item container...............
   itemCont.classList.add("show-itemContainer");
   // add to local storage................
   addToLocalStorage(id, value);
   // set back to default...............
   setBackToDefault();
  }
  // check if input value = true & edit btn = true...........
  else if (value && editFlag) {
    // set edit text to input value........
    editElement.innerHTML = inputTxt.value;
    // display alert...................
    displayAlert("value changed", "succes");
    // change back update button............
    addbtn.textContent = "Submit";
    // edit local storeage..........
    editLocalStorage(editID, inputTxt.value);
    // set back to default......
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
};

// display alert function.......
function displayAlert(text, action) {
  // display alert.......
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert .......
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`)
  }, 1000);
}

// delete an item function...
function deleteItem(e) {
  // direct event handler to parent element & id to be delected..
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  // remove the element..........
  list.removeChild(element);
  // check if this is the last element on the list.....
  if (list.children.length === 0) {
    itemCont.classList.remove("show-itemContainer");
  }
  // display alert.................
  displayAlert("item removed", "danger");
  // set back to default...........
  setBackToDefault();
  // remove from local storage......
  removeFromLocalStorage(id);
};

// edit button function.....
function editItem(e) {
  // direct event handler to parent element & id to be delected...
  const element = e.currentTarget.parentElement.parentElement;
  // setect the item to be edited....................
  editElement = e.currentTarget.parentElement.parentElement.previousElementSibling.firstElementChild;
  // set input value to the input....
  inputTxt.value = editElement.innerHTML;
  // change the edit flag to true.....
  editFlag = true;
  editID = element.dataset.id;
  // change add button......
  addbtn.textContent = "Update";
};

// done button function
function doneItem(e) {
  // set event to target item....
  articleElement = e.currentTarget.parentElement.parentElement.parentElement;
  textContentValue = e.currentTarget.parentElement.parentElement.previousElementSibling;
  donebtnTxt = e.currentTarget;
  editbtnTxt = e.currentTarget.parentElement.firstElementChild;
  // checked text;
  if (textContentValue.classList.value === "content") {
    // change style of the article.....
    articleElement.classList.add('doneA');
    // change text decoration of the page.....
    textContentValue.classList.add('checked');
    // change text contect of done button...
    donebtnTxt.textContent = "Undone";
    // change style of the edit buton....
    editbtnTxt.classList.add('slider');
    // change the edit flag to false....
    editFlag = false;
    // set back to default.........
    setBackToDefault();
  } else {
    // change style of the article...
    articleElement.classList.remove('doneA');
    // change text decoration of the page....
    textContentValue.classList.remove('checked');
    // change text contect of done button...
    donebtnTxt.textContent = "Done";
    // change style of the edit buton...
    editbtnTxt.classList.remove('slider');
    // set back to default.........
    setBackToDefault();
  }
};

// clear button items
function clearItems() {
  const items = document.querySelectorAll('.item');
  // check if there item in the list.......
  if (items.length > 0) {
    items.forEach((item) => {
      // remove all items and display alert....
      list.removeChild(item);
      displayAlert("empty list", "danger");
      // empty local storage.........
      localStorage.removeItem('list');
    });
  } else {
    // hide item container
    itemCont.classList.remove('show-itemContainer');
    // display alert
    displayAlert("empty list", "danger");
    // set back to default
    setBackToDefault();
    // empty local storage
    localStorage.removeItem('list');
  }
}

// set back to default function
function setBackToDefault() {
  inputTxt.value = "";
  editFlag = false;
  editID = '';
  addbtn.textContent = "Submit";
}


// **** LOCAL STORAGE ********************************************
function addToLocalStorage(id, value) {
  const item = {
    id,
    value
  };
  let items = getLocalStorage();
  items.push(item);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  // filter list by id to delect exact id
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  // set back the other items to local storage
  localStorage.setItem("list", JSON.stringify(items));
};

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  // select the id to be edited
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  // set back the other items to local storage
  localStorage.setItem("list", JSON.stringify(items));
}


// ****** WINDOW ONLOAD *****************************************
// sutup Items IN Local storage.....
function setupItems() {
  let items = getLocalStorage();
  // check if there's any item in the local storage
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    // show container to recieve items
    itemCont.classList.add("show-itemContainer");
  };
}

function createListItem(id, value) {
  // head count gerator............ 
  if (count === count) {
    count++;
  };
  // create element to set items in DOM...........
  const element = document.createElement('article');
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("item-list");
  element.innerHTML = `
  <h4 class="head">Note${count}<span class="close">x</span></h4>
  <blockquote class="content">
  <p>${value}</p>
  </blockquote>
  <div class="btnCon">
  <span class="checkBtn">
    <span class="edit ">Edit</span>
    <span class="done  ">Done</span>
  </span>
  </div> `;
  // select the created element for events..........
  const deleteBtn = element.querySelector('.close');
  const editBtn = element.querySelector('.edit');
  const doneBtn = element.querySelector('.done');
  // add event listener to the created element..........
  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);
  doneBtn.addEventListener('click', doneItem);
  // append child to the element in DOM......
  list.appendChild(element);
}

// call set up function on window on load....
window.onloadstart = setupItems();

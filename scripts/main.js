/*const myHeading = document.querySelector('h1')
myHeading.textContent = 'Cheeto the Cat!'
*/

/* let myHTML = document.querySelector('html');
    myHTML.onclick = function () {};

    is the same as the code below
*/

/*
document.querySelector('html').onclick = function () {
  alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc == 'images/cheetoHangry.png') {
    myImage.setAttribute('src', 'images/happyCheeto.png');
  } else {
    myImage.setAttribute('src', 'images/cheetoHangry.png')
  }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have you met Cheeto, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storeNamed = localStorage.setItem('name');
  myHeading.textContent = 'Have yo met Cheete, ' + storedName;
}

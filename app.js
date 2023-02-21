"use strict";

let number = 0;

window.addEventListener("load", initiateApp);

function initiateApp() {
  console.log("app is ready");
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementNumber);

  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decrementNumber);
}

function incrementNumber() {
  console.log("incrementNumber");

  number = +2;
  displayNumber();
}

function decrementNumber() {
  console.log("decrementNumber");
  number--;
  displayNumber();
}

function displayNumber() {
  document.querySelector("#number").textContent = number;
  let message = `the number is: ${number}`;
  document.querySelector("#message").textContent = message;
}

// global variables
"use strict";
const sanityCheck = "Sanity Check.";
const iGotClicked = "I got clicked!";
const button = document.querySelectorAll(".drum");

// event listeners
// loop through all buttons and add an event listener
for (i of button) {
  i.addEventListener("click", () => {
    console.log(iGotClicked);
  });
}

// practice
// create a calculator function group
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

// delete me when done
console.info(sanityCheck);

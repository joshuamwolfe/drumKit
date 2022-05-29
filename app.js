// global variables
"use strict";
const sanityCheck = "Sanity Check.";
const iGotClicked = "I got clicked!";
const numberOfDrumButtons = 7;

// event listeners
// loop through all buttons and add an event listener

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.debug(buttonInnerHTML);
    }
  });
}

// let audio = new Audio("sounds/tom-2.mp3");
// audio.play();
// delete me when done
console.info(sanityCheck);

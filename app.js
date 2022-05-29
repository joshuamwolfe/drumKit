// global variables
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

function handleClick() {
  console.info("I got clicked.");
}

// delete me when done
console.info(sanityCheck);


var randomNumber1 = rollD6();
var randomNumber2 = rollD6();
var d6Image1 = "images/dice" + randomNumber1 + ".png";
var d6Image2 = "images/dice" + randomNumber2 + ".png";

// console.log(d6Image1);
// console.log(d6Image2);
document.querySelector("#player-1 .dice").setAttribute("src", d6Image1);
document.querySelector("#player-2 .dice").setAttribute("src", d6Image2);

function rollD6() {
  return Math.floor(6 * Math.random()) + 1;
}

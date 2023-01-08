var randomNumber1 = rollD6();
var randomNumber2 = rollD6();
var imgDir = "images/"
var d6Image1 = imgDir + "dice" + randomNumber1 + ".png";
var d6Image2 = imgDir + "dice" + randomNumber2 + ".png";
var h1 = document.querySelector(".h1");

// console.log(d6Image1);
// console.log(d6Image2);
document.querySelector("#player-1 .die-image").setAttribute("src", d6Image1);
document.querySelector("#player-2 .die-image").setAttribute("src", d6Image2);

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "Player 2 Wins! 🚩";
} else {
  h1.innerHTML = "Draw!";
}

function rollD6() {
  return Math.floor(6 * Math.random()) + 1;
}

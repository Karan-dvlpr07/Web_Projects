let FirstnumberElement = document.getElementById("Firstnumber");
let SecondnumberElement = document.getElementById("Secondnumber");

let UserInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

function restartGame() {
  let FirstrandomNumber = Math.ceil(Math.random() * 100);
  let SecondrandomNumber = Math.ceil(Math.random() * 100);
  FirstnumberElement.textContent = FirstrandomNumber;
  SecondnumberElement.textContent = SecondrandomNumber;
  gameResultElement.textContent = "";
  UserInputElement.value = "";
}
restartGame();
function checkResult() {
  let isEqual =
    parseInt(FirstnumberElement.textContent) +
    parseInt(SecondnumberElement.textContent);
  let userInputnumber = parseInt(UserInputElement.value);
  if (userInputnumber === "") {
    gameResultElement.textContent = "Please Try again";
    gameResultElement.style.background = "Red";
  } else if (userInputnumber === isEqual) {
    gameResultElement.textContent = "Congratulations you got it right";
    gameResultElement.style.background = "#028a0f";
  } else {
    gameResultElement.textContent = "Please Try again";
    gameResultElement.style.background = "Red";
  }
}

"use strict";

function getSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = getSecretNumber();
let score = Number(document.querySelector(".score").textContent);
let highscore = 0;
document.querySelector(".highscore").textContent = highscore;

// Implementation of the Check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😢 No Number!";
  }
  // The scenario when the user wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // Checking if the guess is higher or lower than the secret number
  else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 High!" : "📉 Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😢 You lost the game, try again!";
      document.body.style.backgroundColor = "#f08080";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Implementation of the Again button
document.querySelector(".again").addEventListener("click", function () {
  document.body.style.backgroundColor = "#222";
  secretNumber = getSecretNumber();
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});

"use strict";

//Selecting and Manipulating Elements
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 17;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secret);
// document.querySelector(".number").textContent = secret;

// Handling Click Events
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess);
  if (!guess) {
    console.log("No Number 🙄");
  } else if (guess === secret) {
    document.querySelector(".number").textContent = secret;
    document.querySelector(".message").textContent = "Correct Number";
    const highscore = Number(document.querySelector(".highscore").textContent);

    const scorern = Number(document.querySelector(".score").textContent);
    console.log(`highscore : ${scorern}`);
    if (scorern > highscore)
      document.querySelector(".highscore").textContent = scorern;
    // changing background color
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess < secret) {
    if (score <= 1 && score > 0) {
      document.querySelector(".message").textContent = "You lost the game! 😔";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too low! 🔻";
    }
  } else if (guess > secret) {
    if (score <= 1 && score > 0) {
      document.querySelector(".message").textContent = "You lost the game! 😔";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too high! 🔺";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
});

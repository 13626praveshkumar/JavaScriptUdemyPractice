"use script";

//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentscore = 0;
let activeplayer = 0;
let scores = [0, 0];

let switchPlayer = function () {
  // switch to next player
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  // 1 . Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Displaying dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3.Check for rolled 1 :if true ,switch to next palyer
  if (dice !== 1) {
    //Add dice to current score
    currentscore += dice;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  console.log("hold");
  //Add current score to active playeer
  scores[activeplayer] += currentscore;
  console.log(scores[activeplayer]);
  document.querySelector(`#score--${activeplayer}`).textContent =
    scores[activeplayer];

  if (scores[activeplayer] >= 20) {
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add("player--winner");
  } else {
    console.log("On hold switch");
    switchPlayer();
  }
});

btnNew.addEventListener("click", function () {
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  scores[0] = 0;
  scores[1] = 0;
  currentscore = 0;
  activeplayer = 0;
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
});

"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
/*const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal"); // will pick only first element

console.log(btnsOpenModal);

const btnsOpenModalAll = document.querySelectorAll(".show-modal"); // will pick all element
console.log(btnsOpenModalAll);

const openModal = function () {
    console.log("open Modal");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeModal = function () {
  console.log("Close Modal");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModalAll.length; i++) {
  btnsOpenModalAll[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
*/
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

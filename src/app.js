/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".poker-card").innerHTML = cardPocker();
  document.querySelector(".poker-card").classList.add(cardIcon());
};

let cardPocker = () => {
  let randomNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNumberShow = Math.floor(Math.random() * randomNumber.length);
  return randomNumber[randomNumberShow];
};

let cardIcon = () => {
  let randomIcon = ["diamond", "spade", "heart", "club"];
  let randomIconShow = Math.floor(Math.random() * randomIcon.length);
  return randomIcon[randomIconShow];
};

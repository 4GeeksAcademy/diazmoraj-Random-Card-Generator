/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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
    let randomIcon = ["♦", "♥", "♠", "♣"];
    let randomNumberShow = Math.floor(Math.random() * randomNumber.length);
    let randomIconShow = Math.floor(Math.random() * randomIcon.length);
    return {
      randomNumber: randomNumber[randomNumberShow],
      randomIcon: randomIcon[randomIconShow]
    };
  };

  let iconcard = cardPocker().randomIcon;

  document.querySelector(".div-center").innerText = cardPocker().randomNumber;

  document.querySelectorAll(".div-right, .div-left").forEach(value => {
    value.innerText = iconcard;
  });
};

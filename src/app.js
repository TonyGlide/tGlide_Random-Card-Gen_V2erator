/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".top").innerHTML = sSymbol;
  document.querySelector(".number").innerHTML = values();
  document.querySelector(".bottom").innerHTML = sSymbol;

  if (sSymbol === "♦" || sSymbol === "♥") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  }
};

function values() {
  let ArrNum = [
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
    "K",
    "A"
  ];

  let numValues = Math.floor(Math.random() * ArrNum.length);
  return ArrNum[numValues];
}
function ccolorF() {
  return sSymbol;
}
let sSymbol = symbol();
function symbol() {
  let ArrSymbol = ["♦", "♥", "♠", "♣"];
  let sIndex = Math.floor(Math.random() * ArrSymbol.length);
  return ArrSymbol[sIndex];
}

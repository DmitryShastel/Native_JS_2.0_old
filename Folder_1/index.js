let a = ""; //the first number
let b = ""; //the second number
let sign = ""; //the sign operation
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

//screen value
const out = document.querySelector(".calc-screen p");

let clearAll = () => {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
};

document.querySelector(".ac").onclick = clearAll;

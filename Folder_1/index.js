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

document.querySelector(".buttons").onclick = (event) => {
  //the button ac isn't pushed
  if (!event.target.classList.contains("btn")) return;
  //the button ac is pushed
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";

  //get pushed button
  const key = event.target.textContent;

  //if pushed button 0-9 or dot
  if (digit.includes(key)) {
    a += key;
    console.log(a, b, sign);
    out.textContent = a;
  }

  //if pushed the button + - / *
  if (action.includes(key)) {
    sing = key;
    out.textContent = sign;
    console.log(a, b, sing);
    return;
  }
};

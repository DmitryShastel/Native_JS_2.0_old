const numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map((number) => number * number);
console.log(numbers, newNumbers);

const strings = ["a", "b", "c", "d", "e"];

let newStrings = strings.map((string) => {
  return string + " " + "!";
});

console.log(newStrings);

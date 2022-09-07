const strings = ["a", "b", "c", "d", "e"];

let newStrings = strings.map((string) => {
  return string + " " + "!";
});

console.log(newStrings);

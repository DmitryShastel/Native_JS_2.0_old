const strings = [1, 2, 3, 4];

let newStrings = strings.map((string, index) => {
  return string * index;
});

console.log(newStrings); // [0, 2, 6, 12]

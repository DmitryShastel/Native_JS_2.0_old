// const strings = [1, 2, 3, 4];

// let newStrings = strings.map((string, index) => {
//   return string * index;
// });

// console.log(newStrings); // [0, 2, 6, 12]

// const clients = [
//   { id: 1, user: "Ivanov", debpt: 1 },
//   { id: 2, user: "Ivanov2", debpt: 22 },
//   { id: 3, user: "Ivanov3", debpt: 17 },
//   { id: 4, user: "Ivanov4", debpt: 8 },
//   { id: 5, user: "Ivanov5", debpt: 6 },
// ];

// let result = clients.filter((e) => e.debpt > 10);

// console.log(result);

// let a1 = [1, 8, 7, 99, 66, 90, 3, 41];

// let f1 = () => {
//   let z1 = a1.filter((e, index) => {
//     if (index > 4) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   console.log(z1);
// };

// const strings = ["regardless", "hello"];

// let newStrings = strings.map((string) => {
//   return string.split("").reverse().join("");
// });

// console.log(newStrings);

// const arr = ["123", "456", "789"];

// let arr1 = [];

// let newArr = arr.map((e) =>
//   e.split("").map((singleNumber) => Number(singleNumber))
// );

// console.log(newArr);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const finalArray = data.reduce((prev, item) => {
  return prev.concat(item);
});

console.log(finalArray);

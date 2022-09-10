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

// const data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const finalArray = data.reduce((prev, item) => {
//   return prev.concat(item);
// });

// console.log(finalArray);

// let array = [1, 2];

// let b = () => {
//   let array2 = array.reduce((prev, item) => {
//     if (item == Number) {
//       return true;
//     } else {
//       return false;
//     }
//   }, []);
//   console.log(array2);
// };

//Подсчитать сумму балов студентов
// let studens = [
//   { name: "John", score: 120 },
//   { name: "John2", score: 22 },
//   { name: "John3", score: 18 },
//   { name: "John4", score: 51 },
// ];

// let scoures = studens
//   .filter((studens) => studens.score > 50)
//   .reduce((acc, curr) => acc + curr.score, 0);

// console.log(scoures);

//вывести общее количество студентов с баллами больше 50, полученными после начисления поощрения в 15 баллов.

let studentRecords = [
  { id: 1, name: "John", marks: 98 },
  { id: 2, name: "John2", marks: 23 },
  { id: 3, name: "John3", marks: 45 },
  { id: 4, name: "John4", marks: 75 },
  { id: 1, name: "John", marks: 98 },
];

let totalMarks = studentRecords
  .map((stu) => {
    if (stu.marks < 50) {
      stu.marks += 15;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 50)
  .reduce((acc, item) => acc + item.marks, 0);

console.log(totalMarks);

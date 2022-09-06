// const months = ["January", "February", "March", "Aprial"];

// const transformedArray = months.map((months) => {
//   return months.toUpperCase();
// });

let studentRecords = [
  {
    id: 1,
    name: "John",
    marks: 98,
  },
  {
    id: 2,
    name: "Baba",
    marks: 23,
  },
  {
    id: 3,
    name: "yaga",
    marks: 45,
  },
  {
    id: 4,
    name: "Wick",
    marks: 75,
  },
];

let studentNames = studentRecords.map((studentRecords) =>
  studentRecords.name.toUpperCase()
);

console.log(studentNames);

// console.log(months, transformedArray);

// let showArray = () => {
//   const transformedArray = months.map((month) => {
//     return month.toUpperCase();
//   });

//   console.log(months, transformedArray);
// };

// const users = [
//   {
//     first_name: "Mike",
//     last_name: "Sheridan",
//     age: 30,
//     location: "London",
//   },
//   {
//     first_name: "Tim",
//     last_name: "Lee",
//     age: 22,
//     location: "US",
//   },
//   {
//     first_name: "John",
//     last_name: "Carte",
//     age: 45,
//     location: "Australia",
//   },
// ];

// let showUsers = () => {
//   const transformObject = users.map((user) => {
//     return `${user.first_name} lives in ${user.location}`;
//   });
//   console.log(users, transformObject);
// };

//перевернуть символы каждой строки в обратном порядке.
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

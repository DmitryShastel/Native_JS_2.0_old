// const months = ["January", "February", "March", "Aprial"];

// const transformedArray = months.map((months) => {
//   return months.toUpperCase();
// });

// console.log(months, transformedArray);

// let showArray = () => {
//   const transformedArray = months.map((month) => {
//     return month.toUpperCase();
//   });

//   console.log(months, transformedArray);
// };

const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
    age: 30,
  },
  {
    first_name: "Tim",
    last_name: "Lee",
    age: 22,
  },
  {
    first_name: "John",
    last_name: "Carte",
    age: 45,
  },
];

let showUsers = () => {
  const transformObject = users.map((user) => {
    return `${user.age}`;
  });
  console.log(users, transformObject);
};

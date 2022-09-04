const months = ["January", "February", "March", "Aprial"];

// const transformedArray = months.map((months) => {
//   return months.toUpperCase();
// });

// console.log(months, transformedArray);

let showArray = () => {
  const transformedArray = months.map((month) => {
    return month.toUpperCase();
  });

  console.log(months, transformedArray);
};

// const users = [
//     {
//         first_name: 'Mike',
//         last_name: 'Sheridan',
//     },
//     {
//         first_name: 'Tim',
//         last_name: 'Lee',
//     },
//     {
//         first_name: 'John',
//         last_name: 'Carte',
//     }
// ];

// let showUsers = () => {
//     const transformObject = users.map((user) => {
//         return user.first_name + ' ' + user.last_name;
//     })
//     console.log(users, transformObject)
// }

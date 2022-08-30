// Проверка на пустоту
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

console.log(user);

let schedule = () => {
  let a = "age" in user;
  a == true ? console.log(true) : console.log(false);
};

// Сумма свойств объекта
let user = {
  Jonh: 100,
  Ann: 160,
  Pete: 130,
  title: "My menu",
};

let schedule = () => {
  for (let key in user)
    if (typeof user[key] == "number") {
      user[key] *= 2;
      console.log(user);
    }
};

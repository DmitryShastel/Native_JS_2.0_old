const employees = [
  { name: "David", age: 30 },
  { name: "John", age: 28 },
  { name: "Mike", age: 36 },
  { name: "John", age: 30 },
];

let employee = employees.filter(
  (employee) => employee.name.indexOf("John") > -1
);

console.log(employee);

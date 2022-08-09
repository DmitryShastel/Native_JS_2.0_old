// Есть объект users в которм перечислен возраст участников. Напишите код, который выведет суммарный возраст всех участников. 
Решите задачу через цикл for...in.

let users = {
    'John': 28,
    'Mark': 30,
    'David': 25,
    'Richard': 42,
};

let sum = 0;

for(let name in users){
     sum += users[name];
}

console.log(sum);
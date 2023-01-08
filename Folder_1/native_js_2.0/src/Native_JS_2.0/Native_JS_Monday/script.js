//событие =>
//генерирует объект, со сведениями о произошедшем событии =>
//вызов функции-обработчика с этим объектом в качестве параметра

//объект, со сведениями о событии => e && ev && event
//Функция => обработчик, handler, сдушатель, listener, подписчик, subscriber
//eTarget => элемент, который сгенерировал событие(первый получил клик)
//e.currentTarget => элемент, который вызвал обработчик в процессе всплытия, оно меняется при всплытии события


// const sml = document.getElementById("small")
// const mdm = document.getElementById("medium")
// const big = document.getElementById("big")
// const link = document.getElementById("link")

// function onClickHandler(e) {//e => объект
//     e.stopPropagation()//не травмирует родителей
//     alert(e.currentTarget.id)
// }

//sml.onclick = onClickHandler
// mdm.onclick = ()=>alert("Hi")
// big.onclick = ()=>alert("dfsdfsdfsdfsd")

// link.onclick = (e)=>{
//     e.preventDefault()
//     alert('Гугл')
// }

//
// let handler = (e) => console.log(e.target)
// sml.addEventListener(handler)


const todoListId_1 = '12457-dd4474'
const todoListId_2 = '12rr54-d7474'

const todoLists = [
    {id: todoListId_1, title: 'What to learn'},
    {id: todoListId_2, title: 'What to buy'}
]

const tasks = {
    [todoListId_1]: [
        {name: 'HTML', isDone: true},
        {name: 'CSS', isDone: false}
    ],
    [todoListId_2]: [
        {name: 'Beer', isDone: true},
        {name: 'Fish', isDone: false}
    ],
}

// console.log(tasks[todoListId_1])
// console.log(tasks[todoListId_1][0])
// console.log(tasks[todoListId_1][0].name)
//
// console.log(tasks[todoLists[0].id].filter(t => t.name !== 'HTML'))
// console.log([...tasks[todoListId_1], {name: 'React', isDone: true}])


// reduce: [1,2,3,4,5,6] => @

const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: 'Alex',
        age: 29,
        isMarried: true,
        scores: 89,
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        id: 4,
        name: 'John',
        age: 22,
        isMarried: false,
        scores: 100,
    }
]

console.log(students.map((s) => {
    if (s.scores < 90) {
        s.scores += 15;
    }
    return s;
}).filter((s) => {
    return s.scores > 101
}))

//     .filter(s => s.scores > 90).reduce((acc, el) => {
//     return acc + el.scores
// })

// console.log(students.filter((st) => {
//     return st.scores > 90 && st.id > 2
// }))
// console.log(students.reduce((acc, el) => {
//     if (el.scores > 90 && el.id > 2) {
//         return el
//     } else {
//         return
//     }
// }))

const nums = [1, 2, 3, 4, 5, 6]


// console.log(nums.reduce((acc, el) => {
//     return acc + el
// }, 0))
// console.log(nums.reduce((acc, el) => {
//     return acc > el ? acc : el
// }, 0))
// console.log(students.reduce((acc, el) => {
//     return acc + el.scores
// }, 0))
// console.log(students.reduce((acc, el) => {
//     return acc.age > el.age ? acc : el
// }))


const arr = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4']
])
arr.set('key5', 'value5');
arr.delete('key1')


// console.log(arr.size)
// console.log(arr.get('key1'))
// console.log(arr.has('key2'))

let box = {
    "accessories": "наушники", // "ключ" : "значение",
    "product": "шоколадка",
    "perfume": "флакон духов",
}

// console.log(box)

let arr2 = [1, -2, -3, 4, 5, -6];

// console.log(arr2.reduce((acc, el) => {
//     if (el > 0) {
//         return acc + el
//     } else {
//         return acc
//     }
// }, 0))






























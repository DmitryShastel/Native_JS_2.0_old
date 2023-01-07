//событие =>
//генерирует объект, со сведениями о произошедшем событии =>
//вызов функции-обработчика с этим объектом в качестве параметра

//объект, со сведениями о событии => e && ev && event
//Функция => обработчик, handler, сдушатель, listener, подписчик, subscriber
//eTarget => элемент, который сгенерировал событие(первый получил клик)
//e.currentTarget => элемент, который вызвал обработчик в процессе всплытия, оно меняется при всплытии события


const sml = document.getElementById("small")
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


let handler = (e) => console.log(e.target)
sml.addEventListener(handler)





const todoListId_1 = '12457-dd4474'
const todoListId_2 = '12rr54-d7474'

const todoList = [
    {id: 1, title: 'What to learn'},
    {id: 2, title: 'What to buy'}
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











































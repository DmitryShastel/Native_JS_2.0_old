import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Native_JS_2.0/Native_JS_Monday/Button";
import {UniversalInput} from "./Native_JS_2.0/Native_JS_Monday/Components/UniversalInput";


export type BanknotsType = '' // создадим типы для banknotes -он может быть 'Dollars', 'RUBLS' или 'All'
export type MoneyType = {
    banknotes: BanknotsType
    value: any// не ленимся, убираем заглушку, и пишем правильный тип)
    number: any// ложку за Димыча, за...
}
export type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

let defaultMoney: any = [  // типизируем
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]
// типизируем на входе и выходе
export const moneyFilter = (money: any, filter: any): any => {
    //если пришел filter со значением 'All', то возвращаем все банкноты
    //return money.filter... ну да, придется фильтровать
}

export function App() {

    const [todos, setTodos] = useState<TodosType[]>([])
    const [newTitle, setNewTitle] = useState('')
    console.log(newTitle)

    const myFeatch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        myFeatch()
    }, [])

    const onGetUsers = () => {
        myFeatch()
    }

    const onDeleteUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos([]))
    }

    const mappeedTodos = todos.map((t, index) => {
        return (
            <li key={index}>
                <span>id:{t.id}  </span>
                <span>userId: {t.userId}  </span>
                <input type='checkbox' checked={t.completed}/>
                <span>{t.title}</span>
            </li>
        )
    })

    const addNewTitleHandler = () => {
        let newTodo = {completed: false,  id: todos.length + 1 , title: newTitle, userId: 55}
        setTodos([newTodo, ...todos])
        setNewTitle('')
    }

    return (
        <div>
            <UniversalInput setNewTitle={setNewTitle} newTitle={newTitle}/>
            <Button name={'Show Users'} callBack={onGetUsers}/>
            <Button name={'Delete'} callBack={onDeleteUsers}/>
            <Button name={'AddNewTitle'} callBack={addNewTitleHandler}/>
            <ul>
                {mappeedTodos}
            </ul>

        </div>
    )
}


// убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
// const [money, setMoney] = useState<any>([])
//const [filterValue, setFilterValue] = useState<any>('')   // по умолчанию указываем все банкноты

// а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
// в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
//const filteredMoney = moneyFilter(money: any, money: any)  //грошы, фильтръ
//return (
//  <div className="App">
//         <Country
//             data={filteredMoney}   //отрисовать будем деньги после фильтрации
//             setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
//
//         />
//     </div>
// );


//Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country

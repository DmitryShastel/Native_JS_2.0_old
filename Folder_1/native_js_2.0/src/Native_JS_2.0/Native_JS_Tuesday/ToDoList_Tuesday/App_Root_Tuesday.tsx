import React, {useState} from 'react';
import {TodoListTuesday} from "./TodoList_Tuesday";
import {v1} from "uuid";
import {AddItemFormTuesday} from "./AddItemForm_Tuesday";

export type  TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksType = {
    [key: string]: TaskType[]
}

export type ToDoListsType = {
    id: string
    title: string
    filter: string
}
export type FilterType = 'All' | 'Active' | 'Completed'

export const AppRootTuesday = () => {

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<ToDoListsType[]>([
        {id: todolistId1, title: 'What to learn', filter: 'All'},
        {id: todolistId2, title: 'What to buy', filter: 'All'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistId1]: [
            {id: v1(), title: 'HTML', isDone: false},
            {id: v1(), title: 'CSS', isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), title: 'Books', isDone: true},
            {id: v1(), title: 'Food', isDone: true},
        ]
    })


    const addTask = (todolistId: string, newTaskTitle: string) => {
        let newTask = {id: v1(), title: newTaskTitle, isDone: false}
        let todolistsTasks = tasks[todolistId]
        tasks[todolistId] = [newTask, ...todolistsTasks]
        setTasks({...tasks})
    }
    const removeTask = (todolistId: string, taskId: string) => {
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(t => t.id != taskId)
        setTasks({...tasks})
    }
    const changeTaskTitle = (todolistId: string, taskId: string, updateTitle: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, title: updateTitle} : el)
        })
        // setTasks((changedTitle) => changedTitle.map((task) =>
        //         task.id === taskId ? {...task, title: newTitle} : task
        //     )
        // )
    }
    const changeFilter = (todolistId: string, value: FilterType) => {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }
    const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }
    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(todolist => todolist.id != todolistId))
        delete tasks[todolistId]
        setTasks({...tasks})
    }
    const addTodolist = (todolistTitle: string) => {
        let todolistId = v1()
        let newTodolist = {id: todolistId, title: todolistTitle, filter: 'All'}
        setTodolists([...todolists, newTodolist])
        setTasks({...tasks, [todolistId]: []})
    }
    const changeTodolistTitle = (todolistId: string, updateTitle: string) => {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el,title: updateTitle} : el))
    }


    return (
        <div>
            <AddItemFormTuesday callBack={addTodolist}/>
            {
                todolists.map((todolist => {

                    let allTodolistTasks = tasks[todolist.id]
                    let tasksForTodolist = allTodolistTasks

                    if (todolist.filter === 'Active') {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false)
                    }
                    if (todolist.filter === 'Completed') {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true)
                    }

                    return <TodoListTuesday
                        todolistId={todolist.id}
                        key={todolist.id}
                        title={todolist.title}
                        tasks={tasksForTodolist}
                        addTask={addTask}
                        removeTask={removeTask}
                        changeTaskStatus={changeTaskStatus}
                        changeTaskTitle={changeTaskTitle}
                        changeFilter={changeFilter}
                        removeTodolist={removeTodolist}
                        changeTodolistTitle={changeTodolistTitle}
                    />
                }))
            }
        </div>
    );

}
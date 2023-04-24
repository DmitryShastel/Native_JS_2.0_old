import React, {useState} from 'react';
import {TaskType, Todolist_6} from "./Todolist_6";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";

export type FilterValuesType = "all" | "active" | "completed"
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
type TaskStateType = {
    [key: string]: Array<TaskType>
}

export function RootApp_6() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistId1]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Book", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "C#", isDone: true}
        ]
    })

    // console.log(tasks[todolistId2].map(el => el.title == 'JS' ? {...el, title: 'true'} : el))

    const updateTask = (todolistId: string, taskId: string, updateTitle: string) => {
        setTasks({...tasks,[todolistId]: tasks[todolistId].map(el=> el.id === taskId ? {...el,title:updateTitle}: el)})
    }

    const updateTodolistTitle = (todolistId: string, updateTitle: string) => {

    }

    function removeTasks(id: string, todolistId: string) {
        //достанем нужный массив по todolistId:
        let todolistTasks = tasks[todolistId];
        //перепишем в этом объекте массив для нужного тудулиста отфильтрованным массивом;
        tasks[todolistId] = todolistTasks.filter(t => t.id != id);
        //засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks});

    }
    function removeTodolist(id: string) {
        //засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
        setTodolists(todolists.filter(tl => tl.id != id));
        //удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
        delete tasks[id]; // удаляем св-во из объекта... значением которого является массив тасок
        //засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks});
    }
    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }
    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        //достанем нужный массив по todolistId:
        let todolistTasks = tasks[todolistId];
        // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску
        tasks[todolistId] = [task, ...todolistTasks];
        //засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        setTasks({...tasks})
    }
    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        //достанем нужный массив по todolistId:
        let todolistTasks = tasks[todolistId];
        //найдем нужную таску:
        let task = todolistTasks.find(t => t.id === id);
        //изменим таску, если нашлась
        if (task) {
            task.isDone = isDone;
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            setTasks({...tasks})
        }
    }
    const addTodolist = (newTitle: string) => {
        const newTodolistID = v1()
        //type is required
        let newTodolist: TodolistType = {id: newTodolistID, title: newTitle, filter: "all"}
        setTodolists([...todolists, newTodolist])
        setTasks({[newTodolistID]: [{id: v1(), title: "JS", isDone: true}] ,...tasks})
    }

    return (
        <div className="App">

            <AddItemForm callBack={addTodolist}/>

            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist_6
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTasks={removeTasks}
                        removeTodolist={removeTodolist}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={tl.filter}
                        updateTask={updateTask}
                        updateTodolistTitle={updateTodolistTitle}
                    />
                })
            }
        </div>
    );
}
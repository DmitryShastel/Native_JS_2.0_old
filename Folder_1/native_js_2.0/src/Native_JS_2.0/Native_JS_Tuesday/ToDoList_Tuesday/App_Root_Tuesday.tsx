import React, {useState} from 'react';
import {TodoListTuesday} from "./TodoList_Tuesday";
import {v1} from "uuid";

export type  TaskType = {
    id: string
    title: string
    isDone: boolean
}

// export type TasksType = {
//     [key: string]: TaskType[]
// }

export type ToDoListsType = {
    id: string
    title: string
    filter: string
}


export const AppRootTuesday = () => {

    // let todolistId1 = v1()
    // let todolistId2 = v1()
    // let [todolists, setTodolists] = useState<ToDoListsType[]>([
    //     {id: todolistId1, title: 'What to learn', filter: 'all'},
    // ])
    // let [tasks, setTasks] = useState<TasksType>({
    //     [todolistId1]: [
    //         {id: v1(), title: 'HTML', isDone: true},
    //         {id: v1(), title: 'CSS', isDone: true},
    //     ],
    //     [todolistId2]: [
    //         {id: v1(), title: 'Books', isDone: true},
    //         {id: v1(), title: 'Food', isDone: true},
    //     ]
    // })


    let [tasks, setTasks] = useState<TaskType[]>([
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'React', isDone: false},
        ]
    )


    const addTask = (taskTitle: string) => {
        let newTask = {id: v1(), title: taskTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }
    const removeTask = (taskId: string) => {
        let removedTask = tasks.filter(task => task.id != taskId)
        setTasks([...removedTask])
    }
    const changeTaskStatus = (taskId: string) => {
        let updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isDone: !task.isDone
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    const changeTaskTitle = (taskId: string, newTitle: string) => {
        setTasks((changedTitle) => changedTitle.map((task) =>
                task.id === taskId ? {...task, title: newTitle} : task
            )
        )
    }


    return (
        <div>
            <TodoListTuesday
                tasks={tasks}
                addTask={addTask}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
            />
        </div>
    );
};
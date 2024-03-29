import React from 'react';
import {FilterType, TaskType} from "./App_Root_Tuesday";
import './ToDoList_Tuesday.css';
import {AddItemFormTuesday} from "./AddItemForm_Tuesday";
import {EditableSpanTuesday} from "./EditableSpan_Tuesday";
import {SuperCheckbox} from "./SuperCheckbox";

type ToDoListType = {
    todolistId: string
    title: string
    tasks: TaskType[]
    addTask: (todolistId: string, newTaskTitle: string) => void
    removeTask: (todolistId: string, taskId: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId: string, taskId: string, title: string) => void
    changeFilter: (todolistId: string, value: FilterType) => void
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, updateTitle: string) => void
}


export const TodoListTuesday = (props: ToDoListType) => {

    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }
    const addTaskHandler = (newTitle: string) => {
        props.addTask(props.todolistId, newTitle)
    }
    const changeTodolistTitleHandler = (updateTitle: string) => {
        props.changeTodolistTitle(props.todolistId, updateTitle)
    }

    //filter tasks
    const filterAllTasks = () => {
        props.changeFilter(props.todolistId, 'All')
    }
    const filterActiveTasks = () => {
        props.changeFilter(props.todolistId, 'Active')
    }
    const filterCompletedTasks = () => {
        props.changeFilter(props.todolistId, 'Completed')
    }


    return (
        <div>
            <h3>
                <EditableSpanTuesday oldTitle={props.title} callBack={changeTodolistTitleHandler}/>
                <button onClick={removeTodolistHandler}>X</button>
            </h3>

            <AddItemFormTuesday callBack={addTaskHandler}/>

            {
                props.tasks.map((task) => {


                    const removeTaskHandler = () => {
                        props.removeTask(props.todolistId, task.id)
                    }

                    const changeTaskTitleHandler = (updateSetTitle: string) => {
                        props.changeTaskTitle(props.todolistId, task.id, updateSetTitle)
                    }

                    const changeTaskStatusHandler = (checked: boolean) => {
                        props.changeTaskStatus(props.todolistId, task.id, checked)
                    }

                    return (
                        <ul key={task.id} style={{listStyleType: 'none'}}>

                                <SuperCheckbox isDone={task.isDone} callback={changeTaskStatusHandler}/>
                                <EditableSpanTuesday oldTitle={task.title} callBack={changeTaskTitleHandler}/>
                                <button onClick={removeTaskHandler}>X</button>

                        </ul>
                    )
                })
            }
            <button onClick={filterAllTasks}>All</button>
            <button onClick={filterActiveTasks}>Active</button>
            <button onClick={filterCompletedTasks}>Completed</button>
        </div>
    );
};
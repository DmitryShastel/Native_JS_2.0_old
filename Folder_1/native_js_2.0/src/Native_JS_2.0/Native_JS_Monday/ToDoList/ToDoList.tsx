// // import React, {ChangeEvent, useState} from 'react';
// // import {FilterType} from "../../../App";
// // import {v1} from "uuid";
// //
// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }
// type TodoListType = {
//     tasks: Array<TaskType>
//     title: string
//     removeTask: (id: string) => void
//     addTask: (title: string) => void
//     filteredTasks: (value: FilterType) => void
//     changeStatus: (id: string, isDone: boolean) => void
//     filter: FilterType
// }
//
// export const ToDoList = (props: TodoListType) => {
//     let [title, setTitle] = useState('')
//     let [error, setError] = useState<string | null>(null)
//
//     const onChangeHandlerAddTask = (e: ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.currentTarget.value)
//         setError(null)
//     }
//     const addTask = () => {
//
//         if (title.trim() !== '') {
//             props.addTask(title)
//             setTitle('')
//         } else {
//             setError('Title is required')
//         }
//     }
//     const onAllClickHandler = () => {
//         props.filteredTasks('All')
//     }
//     const onActiveClickHandler = () => {
//         props.filteredTasks('Active')
//     }
//     const onCompletedClickHandler = () => {
//         props.filteredTasks('Completed')
//     }
//
//
//     return (
//         <div>
//             <h3>{props.title}</h3>
//             <div>
//                 <input value={title} onChange={onChangeHandlerAddTask} className={error ? 'error' : ''}/>
//                 <button onClick={addTask}>+</button>
//                 {error && <div className={'error-message'}>{error}</div>}
//             </div>
//             <div>
//                 <ul>
//                     {props.tasks.map((t) => {
//
//                         const onClickHandlerRemove = () => {
//                             props.removeTask(t.id)
//                         }
//                         const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//                             let newIsDoneValue = e.currentTarget.checked
//                             props.changeStatus(t.id, newIsDoneValue)
//                         }
//
//                         return (
//                             <li key={t.id} className={t.isDone ? 'is-done' : ''}>
//                                 <input
//                                     type='checkbox'
//                                     checked={t.isDone}
//                                     onChange={onChangeHandler}
//                                 />
//                                 <span>{t.title}</span>
//                                 <button onClick={onClickHandlerRemove}>x</button>
//                             </li>
//                         )
//                     })}
//
//                 </ul>
//             </div>
//             <button className={props.filter === 'All' ? 'active-filter' : ''}
//                     onClick={onAllClickHandler}>All
//             </button>
//             <button className={props.filter === 'Active' ? 'active-filter' : ''}
//                     onClick={onActiveClickHandler}>Active
//             </button>
//             <button className={props.filter === 'Completed' ? 'active-filter' : ''}
//                     onClick={onCompletedClickHandler}>Completed
//             </button>
//         </div>
//     );
// }
// //
// //
// //
// // //the data from App
// //
// // // export type FilterType = 'All' | 'Active' | 'Completed'
// // //
// // //
// // // let [tasks, setTasks] = useState<Array<TaskType>>([
// // //     {id: v1(), title: 'HTML&CSS', isDone: true},
// // //     {id: v1(), title: 'JS', isDone: true},
// // //     {id: v1(), title: 'React', isDone: false},
// // //     {id: v1(), title: 'TypeScript', isDone: false}
// // // ])
// // //
// // // let [filter, setFilter] = useState<FilterType>('All')
// // //
// // // let taskForToDoList = tasks
// // // if(filter === 'Active') {
// // //     taskForToDoList = tasks.filter(t => t.isDone === false)
// // // }
// // // if(filter === 'Completed'){
// // //     taskForToDoList = tasks.filter(t => t.isDone === true)
// // // }
// // //
// // //
// // //
// // // const removeTask = (id: string) => {
// // //     let removedTask = tasks.filter(t => t.id !== id)
// // //     setTasks(removedTask)
// // // }
// // // const addTask = (title: string) => {
// // //     let newTask = {id: v1(), title: title, isDone: false}
// // //     setTasks([newTask, ...tasks])
// // // }
// // // const filteredTasks = (value: FilterType) => {
// // //     setFilter(value)
// // // }
// // //
// // // const changeStatus = (id: string, isDone: boolean) => {
// // //     let task = tasks.find(t => t.id === id)
// // //     if(task) {
// // //         task.isDone = isDone
// // //         setTasks([...tasks])
// // //     }
// // // }
// // //
// // //
// // // <ToDoList
// // //     title={'What to learn'}
// // //     tasks={taskForToDoList}
// // //     removeTask={removeTask}
// // //     addTask={addTask}
// // //     filteredTasks={filteredTasks}
// // //     changeStatus={changeStatus}
// // //     filter={filter}
// // // />
// //
// //
// //

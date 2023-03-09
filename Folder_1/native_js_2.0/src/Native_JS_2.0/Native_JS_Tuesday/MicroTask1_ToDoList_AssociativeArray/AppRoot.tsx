// import React, {useState} from 'react';
// import {Todolist} from './Todolist';
// import {v1} from 'uuid';
//
// export type todolistsType = {
//     id: string
//     title: string
//     filter: FilterValuesType
// }
//
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// function AppRoot() {
//
//     // let [tasks, setTasks] = useState([
//     //     {id: v1(), title: "HTML&CSS", isDone: true},
//     //     {id: v1(), title: "JS", isDone: true},
//     //     {id: v1(), title: "ReactJS", isDone: false},
//     //     {id: v1(), title: "Rest API", isDone: false},
//     //     {id: v1(), title: "GraphQL", isDone: false},
//     // ]);
//     // let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let todolistID1 = v1();
//     let todolistID2 = v1();
//
//     let [todolists, setTodolists] = useState<Array<todolistsType>>([
//         {id: todolistID1, title: 'What to learn', filter: 'all'},
//         {id: todolistID2, title: 'What to buy', filter: 'all'},
//     ])
//
//     let [tasks, setTasks] = useState({
//         [todolistID1]: [
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true},
//             {id: v1(), title: "ReactJS", isDone: false},
//             {id: v1(), title: "Rest API", isDone: false},
//             {id: v1(), title: "GraphQL", isDone: false},
//         ],
//         [todolistID2]: [
//             {id: v1(), title: "HTML&CSS2", isDone: true},
//             {id: v1(), title: "JS2", isDone: true},
//             {id: v1(), title: "ReactJS2", isDone: false},
//             {id: v1(), title: "Rest API2", isDone: false},
//             {id: v1(), title: "GraphQL2", isDone: false},
//         ]
//     });
//
//     function removeTask(todolistId: string, id: string) {
//         setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id != id)})
//     }
//
//     function addTask(todolistId: string, title: string) {
//         let newTask = {id: v1(), title: title, isDone: false};
//         setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]});
//     }
//
//     function changeStatus(todolistId: string, id: string, isDone: boolean) {
//         setTasks({...tasks, [todolistId]: tasks[todolistId].map(m => m.id === id ? {...m, isDone} : m)});
//     }
//
//
//     function changeFilter(todolistId: string, value: FilterValuesType) {
//         setTodolists(todolists.map(filtered => filtered.id === todolistId ? {...filtered, filter: value} : filtered))
//     }
//
//
//     return (
//         <div className="App">
//
//             {
//                 todolists.map(mapTodolist => {
//                     let tasksForTodolist = tasks[mapTodolist.id];
//
//                     if (mapTodolist.filter === "active") {
//                         tasksForTodolist = tasks[mapTodolist.id].filter(t => t.isDone === false);
//                     }
//                     if (mapTodolist.filter === "completed") {
//                         tasksForTodolist = tasks[mapTodolist.id].filter(t => t.isDone === true);
//                     }
//                     return (
//                         <Todolist
//                             key={mapTodolist.id}
//                             todolistId={mapTodolist.id}
//                             title={mapTodolist.title}
//                             tasks={tasksForTodolist}
//                             removeTask={removeTask}
//                             changeFilter={changeFilter}
//                             addTask={addTask}
//                             changeTaskStatus={changeStatus}
//                             filter={mapTodolist.filter}
//                         />
//                     )
//                 })
//             }
//
//
//         </div>
//     );
// }
//
// export default AppRoot;

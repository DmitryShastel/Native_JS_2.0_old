import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {changeName, copyUsers, newUser, user, users} from "./Native_JS_2.0/Native_JS_Monday/JS_TS_Objects";
import {courses, CourseType, sortAges, sortCourses} from "./Native_JS_2.0/Native_JS_Monday/JS_TS_Filter";


sortAges();
//sortCourses(courses);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

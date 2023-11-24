import React from 'react';
import {Lesson1} from "./Lesson1";
import './style.css'
import {Provider} from "react-redux";
import {store} from "./Redux/state";

export const AppJs10 = () => {
    return (
        <div className="container">
            <Provider store={store}>
                <Lesson1/>
            </Provider>
        </div>
    );
};
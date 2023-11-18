import React from 'react';
import './App.css'
import {
    AppUseSelector
} from "./Native_JS_2.0/Native_JS_Wednesday/native_js/Lesson_1/useSelector/containers/AppUseSelector";
import {Provider} from "react-redux";
import {store} from "./Native_JS_2.0/Native_JS_Wednesday/native_js/Lesson_1/useSelector/store";
import {StoreType} from "./Native_JS_2.0/Native_JS_Wednesday/native_js/Lesson_1/useSelector/reducers/storeReducers";


export function App() {
    return (

        <div>
            <Provider
                //@ts-ignore
                store={store} >
                <AppUseSelector />
            </Provider>,
        </div>

    );
}
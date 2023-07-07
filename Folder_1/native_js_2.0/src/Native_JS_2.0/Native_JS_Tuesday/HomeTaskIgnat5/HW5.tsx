import React from 'react';
import {Header} from "./Header";
import {Routes} from "./Routes";
import {HashRouter} from "react-router-dom";

export const Hw5 = () => {
    return (
        <div>

            <HashRouter>

                <Header/>
                <Routes/>

            </HashRouter>

        </div>

    );
}

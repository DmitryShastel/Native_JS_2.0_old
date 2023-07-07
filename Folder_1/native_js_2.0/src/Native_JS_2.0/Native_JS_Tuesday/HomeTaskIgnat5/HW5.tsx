import React from 'react';
import {Header} from "./Header";
import {NavbarRoutes} from "./Routes";
import {HashRouter} from "react-router-dom";

export const Hw5 = () => {
    return (
        <div>
            <HashRouter>
                <Header/>
                <NavbarRoutes/>
            </HashRouter>
        </div>

    );
}

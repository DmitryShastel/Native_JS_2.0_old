import React from 'react';
import {Header} from "./Header";
import {NavbarRoutes} from "./Routes";
import {BrowserRouter} from "react-router-dom";

export const Hw5 = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <NavbarRoutes/>
            </BrowserRouter>
        </div>

    );
}
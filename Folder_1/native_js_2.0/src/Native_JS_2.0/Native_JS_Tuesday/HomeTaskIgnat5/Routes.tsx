import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Junior} from "./Pages/Junior";
import {JuniorPlus} from "./Pages/JuniorPlus";
import {Error404} from "./Pages/Error404";
import {PreJunior} from "./Pages/PreJunior";



export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}


export const NavbarRoutes = () => {
    return (
        <Routes>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    );
};

import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {Junior} from "./Pages/Junior";
import {JuniorPlus} from "./Pages/JuniorPlus";
import {Error404} from "./Pages/Error404";
import {PreJunior} from "./Pages/PreJunior";
import {HomePage} from "./Pages/HomePage";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    HOME_PAGE: '/',
}


export const NavbarRoutes = () => {

    const location = useLocation()

    return (
        <Routes>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.HOME_PAGE} element={<HomePage/>}/>
            <Route path="*" element={PATH.HOME_PAGE !== location.pathname &&  <Error404/>}/>
        </Routes>
    );
};

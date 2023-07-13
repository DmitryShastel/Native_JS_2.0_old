import React from 'react';
import {Grid} from "@material-ui/core";
import s from "./Error.module.css"
import {Button} from '@mui/material';
import {Link} from "react-router-dom";

export const Error404 = () => {

    const imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMdi3JaPrt463VEIJXdMmRy68h3h4z6HvfuQ&usqp=CAU'


    return (
        <Grid container className={s.container}>
            <Grid item>
                <h1 className={s.title}>404</h1>
            </Grid>
            <Grid item>
                <p className={s.subtitle}>There isn't a GitHub Pages site here.</p>
                <img src={imgSrc} alt='404 error' className={s.image}/>
            </Grid>
            <Grid item>
                <Link to="/">
                    <Button className={s.button} variant="contained" color="error">Back to home page</Button>
                </Link>
            </Grid>
        </Grid>
    );
};
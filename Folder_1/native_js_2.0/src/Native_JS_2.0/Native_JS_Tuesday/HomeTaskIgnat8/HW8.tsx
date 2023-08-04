import React, {useState} from "react";
import {homeWorkReducer} from "./homeWorkReducer";
import {SuperButton} from "../HomeTaskIgnat6/common/SupperButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const initialPeople = [
    {_id: 0, name: "Cot", age: 3},
    {_id: 1, name: "Alex", age: 66},
    {_id: 2, name: "Kolya", age: 16},
    {_id: 3, name: "Victor", age: 44},
    {_id: 4, name: "Dima", age: 40},
    {_id: 5, name: "Ira", age: 55},
]

export function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <Grid container spacing={2} key={p._id}>
            <Grid item>
                <Typography>{p.name}</Typography>
            </Grid>
            <Grid item>
                <Typography>{p.age}</Typography>
            </Grid>
        </Grid>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort-up", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort-down", payload: "up"}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: "up"}))

    return (
        <Grid container spacing={2} margin='5%'>
            <Grid item xs={12}>
                {finalPeople}
            </Grid>

            <Grid item>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
            </Grid>
            <Grid item>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
            </Grid>
            <Grid item>
                <SuperButton onClick={check}>check age</SuperButton>
            </Grid>

        </Grid>
    );
}

// {finalPeople}
// <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
// <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
// <div><SuperButton onClick={check}>check age</SuperButton></div>
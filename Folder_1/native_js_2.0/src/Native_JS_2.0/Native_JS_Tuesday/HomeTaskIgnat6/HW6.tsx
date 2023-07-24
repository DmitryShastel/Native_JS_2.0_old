import React, {useState} from 'react'
import {SuperEditableSpan} from './common/SuperEditableSpanType'
import {SuperButton} from './common/SupperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";



export function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }


    return (

        <Grid container spacing={2} direction="column" margin='5%'>
            <Grid item>
                <Typography variant="h5">Homework №6</Typography>
            </Grid>

            <Grid item>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />

            </Grid>

            <Grid item container direction="row" justifyContent="left">

                <Grid item paddingRight='10px'>
                    <SuperButton onClick={save}>save</SuperButton>
                </Grid>
                <Grid item>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </Grid>
            </Grid>
        </Grid>


    )
}
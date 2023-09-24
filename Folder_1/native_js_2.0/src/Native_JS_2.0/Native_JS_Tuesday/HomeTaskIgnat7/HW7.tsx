import React, {useState} from 'react';
import {SuperSelect} from './SuperSelect';
import {SuperRadio} from './SuperRadio';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const arr = ['x', 'y', 'z'];

export function HW7() {
    const [value, onChangeOption] = useState<string>(arr[1]);

    return (
        <Grid container spacing={2} direction="column" margin="5%">
            <Typography variant="h5">Homework №7</Typography>

            <div>
                <Grid item>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}/>
                </Grid>
            </div>

            <Grid item>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}/>
            </Grid>
        </Grid>
    );
}
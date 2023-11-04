import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Display} from "./Display";
import Input from "./Input";

function App_test() {
    let [count, setCount] = useState(0);

    let [valueInputMax, setValueInputMax] = useState(0);
    let [valueInputStart, setValueInputStart] = useState(0);

    let [edit, setEdit] = useState<null | string>(null);

    const onChangeHandlerMax = (event:ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.currentTarget.value)
        setValueInputMax(value);
        if( value<=valueInputStart){
            setEdit('Incorrect value')
        } else {
            setEdit('Enter SET')
        }

    }
    const onChangeHandlerStart = (event:ChangeEvent<HTMLInputElement>) => {
        let value = Number(event.currentTarget.value)
        setValueInputStart(value);
        if(value< 0 || value >= valueInputMax){
            setEdit('Incorrect value')
        } else {
            setEdit('Enter SET')
        }

    }

    // ---useEffect--valueInputMax-///
    useEffect(() => {
        let valueString = localStorage.getItem('valueMax');
        if (valueString) {
            let newValueMax = JSON.parse(valueString);
            setValueInputMax(newValueMax)
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('valueMax', JSON.stringify(valueInputMax))
    }, [valueInputMax]);

    //---useEffect--valueInputStart-///

    useEffect(() => {
        let valueString = localStorage.getItem('valueMin');
        if (valueString) {
            let newValueMin = JSON.parse(valueString);
            setValueInputStart(newValueMin)
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('valueMin', JSON.stringify(valueInputStart))
    }, [valueInputStart]);

    //---count---///
    useEffect(() => {
        let valueString = localStorage.getItem('count');
        if (valueString) {
            let newCount = JSON.parse(valueString);
            setCount(newCount)
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [valueInputStart]);

    //------///


    let btn_inc = () => count < valueInputMax ? setCount(count + 1) : count;
    let btn_reset = () => count > valueInputStart ? setCount(count = valueInputStart) : count;
    let setButton = () => {
        setCount(valueInputStart);
        setEdit(null)
    }

    const disabledInc = count === valueInputMax;
    const disabledReset = count === 0;


    const titleMax='max value:'
    const titleStart='start value:'


    const classRedMax = valueInputMax  <= valueInputStart ? 'red' : ' ';
    const classRedStart=valueInputStart < 0 || valueInputStart >= valueInputMax ? 'red': ' ';



    return (
        <div className="app_wrapper">
            <div className="App one">
                <div className="display_wrapper">
                    <Input title={titleMax}  onChange={onChangeHandlerMax} value={valueInputMax} classRed={classRedMax}/>
                    <Input title={titleStart}  onChange={onChangeHandlerStart} value={valueInputStart} classRed={classRedStart}/>

                </div>
                <div className="btn_wrapper_one">
                    <Button name='set' callback={setButton} disabled={disabledInc}/>
                </div>
            </div>
            <div className="App two">
                <div className="display_wrapper">
                    <Display count={count} valueInputMax={valueInputMax} valueInputStart={valueInputStart} edit={edit}/>
                </div>
                <div className="btn_wrapper">
                    <Button name='inc' callback={btn_inc} disabled={disabledInc}/>
                    <Button name='reset' callback={btn_reset} disabled={disabledReset}/>
                </div>
            </div>
        </div>
    )
}

export default App_test;

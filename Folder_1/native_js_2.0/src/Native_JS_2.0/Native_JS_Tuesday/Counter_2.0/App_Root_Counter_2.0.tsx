import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from "./SuperButton";
import './Counter_2.0Styles.css'
import {SuperInput} from "./SuperInput";
import {Display} from "./Display";


export const AppRootCounter2_0 = () => {

    //states: counter, inputs, validation
    let [counter, setCounter] = useState(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [error, setError] = useState<null | string>(null)

    //logical functions
    let incCounter = () => {
        return counter < maxValue ? setCounter(++counter) : '';
    }
    let resetCounter = () => {
        return counter > startValue ? setCounter(counter = startValue) : '';
    }
    let setSettings = () => {
        setCounter(startValue)
        setError(null)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(e.currentTarget.value)
        setMaxValue(maxValue)
        if (maxValue <= startValue) {
            setError('Incorrect value')
        } else {
            setError('Enter SET')
        }
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = Number(e.currentTarget.value)
        setStartValue(startValue)
        if (startValue < 0 || startValue >= maxValue) {
            setError('Incorrect value')
        } else {
            setError('Enter SET')
        }
    }
    const errorMaxValue = maxValue <= startValue ? 'errorInput' : '';
    const errorStartValue = startValue < 0 || startValue >= maxValue ? 'errorInput' : '';
    const disabledInc = counter === maxValue
    const disabledReset = counter === startValue
    const disabledSet = disabledInc


    //functions for localStorage
    //maxValue

    useEffect(() => {
        let inputValue = localStorage.getItem('inputMaxData')
        if(inputValue){
            let newInputValue = JSON.parse(inputValue)
            setMaxValue(newInputValue)
        }
    })


    return (
        <div className={'counter-root'}>

            <div className={'counter-settings'}>

                <div className="settings-container">
                    <SuperInput
                        title='max value:'
                        value={maxValue}
                        onChange={onChangeMaxValue}
                        error={errorMaxValue}/>
                    <SuperInput
                        title='start value:'
                        value={startValue}
                        onChange={onChangeStartValue}
                        error={errorStartValue}/>
                </div>

                <div className={'setting-button'}>
                    <SuperButton
                        title='set'
                        callback={setSettings}
                        disabled={disabledSet}
                    />
                </div>
            </div>


            <div className={'counter-counter'}>
                <div className={'counter-display'}>
                    <Display
                        counter={counter}
                        error={error}
                        startValue={startValue}
                        maxValue={maxValue}
                    />
                </div>
                <div className={'counter-buttons'}>
                    <SuperButton
                        title='inc'
                        callback={incCounter}
                        disabled={disabledInc}
                    />
                    <SuperButton
                        title='reset'
                        callback={resetCounter}
                        disabled={disabledReset}
                    />
                </div>

            </div>

        </div>
    );
};
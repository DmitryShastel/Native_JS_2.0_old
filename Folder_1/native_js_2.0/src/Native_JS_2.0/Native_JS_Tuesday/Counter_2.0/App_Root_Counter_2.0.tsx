import React, {ChangeEvent, useState} from 'react';
import {SuperButton} from "./SuperButton";
import './Counter_2.0Styles.css'
import {SuperInput} from "./SuperInput";


export const AppRootCounter2_0 = () => {

    let [counter, setCounter] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [error, setError] = useState<null | string>(null)


    let incCounter = () => {
        return counter < maxValue ? setCounter(++counter) : '';
    }

    let resetCounter = () => {
        return counter > startValue ? setCounter(counter = startValue) : '';
    }

    let setSettings = () => {
        setCounter(startValue)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = Number(e.currentTarget.value)
        setMaxValue(maxValue)
        if(maxValue <= startValue){
            setError('Incorrect value')
        } else {
            setError('Enter SET')
        }
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = Number(e.currentTarget.value)
        setStartValue(startValue)
        if(startValue < 0 || startValue >= maxValue){
            setError('Incorrect value')
        } else {
            setError('Enter SET')
        }
    }


    return (
        <div className={'counter-root'}>

            <div className={'counter-settings'}>

                <div className="settings-container">
                    <SuperInput title='max value:' value={maxValue} callback={onChangeMaxValue}/>
                    <SuperInput title='start value:' value={startValue} callback={onChangeStartValue}/>
                </div>

                <div className={'setting-button'}>
                    <SuperButton
                        title='set'
                        callback={setSettings}
                    />
                </div>
            </div>


            <div className={'counter-counter'}>
                <div className={'counter-display'}>
                    <span className={counter === 5 ? 'error-color' : ''}>{counter} </span>
                </div>
                <div className={'counter-buttons'}>
                    <SuperButton
                        title='inc'
                        callback={incCounter}
                        className={counter === 5 ? 'disabled-inc' : ''}

                    />
                    <SuperButton
                        title='reset'
                        callback={resetCounter}
                        className={counter === 0 ? 'disabled-reset' : ''}/>
                </div>

            </div>

        </div>
    );
};
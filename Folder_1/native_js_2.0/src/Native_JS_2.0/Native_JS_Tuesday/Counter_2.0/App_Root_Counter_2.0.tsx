import React, {useState} from 'react';
import {Settings} from "./Settings";
import {SuperButton} from "./SuperButton";
import './Counter_2.0Styles.css'

export const AppRootCounter2_0 = () => {

    let [counter, setCounter] = useState<number>(0)


    let inc = () => {
        if (counter === 5) {
            return {
                counter
            }
        }
        setCounter(++counter)
    }

    let reset = () => {
        setCounter(0)
    }


    return (
        <div className={'counter-root'}>


            <div className={'counter-settings'}>
                <Settings/>
                <div className={'setting-button'}>
                    <SuperButton
                        title='set'
                        callback={() => {
                        }}
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
                        callback={inc}
                        className={counter === 5 ? 'disabled-inc' : ''}

                    />
                    <SuperButton
                        title='reset'
                        callback={reset}
                        className={counter === 0 ? 'disabled-reset' : ''}/>
                </div>

            </div>

        </div>
    );
};
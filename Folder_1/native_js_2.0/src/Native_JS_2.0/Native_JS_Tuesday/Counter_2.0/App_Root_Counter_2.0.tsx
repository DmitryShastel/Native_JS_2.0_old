import React, {useState} from 'react';
import {Counter_2_0} from "./Counter";

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
        <div>
          <Counter_2_0
              counter={counter}
              inc={inc}
              reset={reset}
          />
        </div>
    );
};
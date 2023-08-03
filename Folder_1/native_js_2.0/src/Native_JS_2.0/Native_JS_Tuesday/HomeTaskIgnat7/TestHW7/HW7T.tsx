import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useState} from "react";
import s from "./SuperHW7T.module.css";
import {SuperRadioT} from "./SuperRadioT";
import {SuperSelectT} from "./SuperSelectT";

const options = ['x', 'y', 'z'];

//type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export function HW7T () {
    const [selectedOption, setSelectedOption] = useState<any>("");


    let handleChange = (e: ChangeEvent<HTMLInputElement>) =>  {
        // props.onChange && props.onChange(e)
        setSelectedOption(e.currentTarget.value);
    };

    return (
        <div className={s.parent}>
            <SuperRadioT
                options={options}
                value={selectedOption}
                handleChange={handleChange}
            />
            <SuperSelectT
                options={options}
                // value={selectedOption}
                handleChange={handleChange}
            />
        </div>
    );
}
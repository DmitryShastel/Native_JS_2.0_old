import React, {useState, ChangeEvent} from "react";
import s from "./SuperHW7T.module.css";
import {SuperRadioT} from "./SuperRadioT";
import {SuperSelectT} from "./SuperSelectT";

const options = [1, 2, 3];

export function HW7T() {
    const [selectedOption, setSelectedOption] = useState("");

    let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                value={selectedOption}
                handleChange={handleChange}

            />
        </div>
    );
}

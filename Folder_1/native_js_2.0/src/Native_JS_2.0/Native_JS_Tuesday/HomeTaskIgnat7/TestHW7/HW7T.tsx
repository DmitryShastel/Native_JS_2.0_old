import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useState} from "react";
import s from "./SuperHW7T.module.css";
import {SuperRadioT} from "./SuperRadioT";
import {SuperSelectT} from "./SuperSelectT";

<<<<<<< HEAD
const options = [1, 2, 3];

export function HW7T() {
  const [selectedOption, setSelectedOption] = useState("");
  
const handleRadioChange  = (value: any) => {
    setSelectedOption(value)
}

  return (
    <div className={s.parent}>
      <SuperRadioT
        value={selectedOption}
        options={options}
        handleChange={handleRadioChange}
      />
      <SuperSelect
        value={selectedOption}
        handleChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
=======
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
>>>>>>> 37dc46892675173cb4cfb7921e0219b56b56a30d

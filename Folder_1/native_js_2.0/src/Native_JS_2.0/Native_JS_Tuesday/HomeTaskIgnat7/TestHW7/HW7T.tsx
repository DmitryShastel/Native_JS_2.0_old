import React, { useState, ChangeEvent } from "react";
import s from "./SuperHW7T.module.css";
import { SuperRadioT } from "./SuperRadioT";
import { SuperSelect } from "./SuperSelectT";

export function HW7T() {
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState<string>("option1");


  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.currentTarget.value);
  };

  return (
    <div className={s.parent}>
      <SuperRadioT
        setSelectedOption={selectedOption}
        handleChange={handleChange}
      />
      <SuperSelect value={value} onChange={handleChange} />
    </div>
  );
}

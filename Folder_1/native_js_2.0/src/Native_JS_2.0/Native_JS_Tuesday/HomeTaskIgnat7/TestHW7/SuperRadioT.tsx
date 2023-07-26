import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";

type SuperRadioTType = {
  setSelectedOption: any;
  handleChange: (e: any) => void;
};

export const SuperRadioT = (props: SuperRadioTType) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={props.setSelectedOption === "option1"}
          onChange={props.handleChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={props.setSelectedOption === "option2"}
          onChange={props.handleChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={props.setSelectedOption === "option3"}
          onChange={props.handleChange}
        />
        Option 3
      </label>
    </div>
  );
};

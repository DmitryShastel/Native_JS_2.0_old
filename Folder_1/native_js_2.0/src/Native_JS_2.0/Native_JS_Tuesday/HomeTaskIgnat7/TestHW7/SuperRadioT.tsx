import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";


type SuperRadioTType = {
    setSelectedOption: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SuperRadioT = (props: SuperRadioTType) => {
  return (
    <div>
      <label>
        <input type="radio" value="option1"  checked={}/>
        Option 1
      </label>
      <label>
        <input type="radio" value="option2" />
        Option 2
      </label>
      <label>
        <input type="radio" value="option3" />
        Option 3
      </label>
    </div>
  );
};

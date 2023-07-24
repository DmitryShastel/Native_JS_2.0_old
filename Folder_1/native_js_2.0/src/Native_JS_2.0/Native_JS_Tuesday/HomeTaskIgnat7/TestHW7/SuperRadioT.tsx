import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";

export const SuperRadioT = () => {
  return <div>

        <label>
            <input type='radio'  value='option1'/>
            Option 1
        </label>
        <label>
            <input type='radio'  value='option2'/>
            Option 2
        </label>
        <label>
            <input type='radio'  value='option3'/>
            Option 3
        </label>

  </div>;
};

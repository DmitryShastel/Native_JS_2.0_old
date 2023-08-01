import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";


type SuperRadioTType = {
  setSelectedOption: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  options:any [] 
};

export const SuperRadioT = (props: SuperRadioTType) => {
  // const radioOptions = [ 1, 2, 3];

  let mappedRadioOptions = props.options.map((option) => (
    <label key={option} >
      <input
        type="radio"
        value={option}
        checked={props.setSelectedOption === option.toString()}
        onChange={props.handleChange}
      />
      {option}
    </label>
  ));

  return <div>{mappedRadioOptions}</div>;
};
















{
  /* <label>
        <input
          type="radio"
          value="option1"
          checked={props.setSelectedOption === "option1"}
          onChange={props.handleChange}
        />
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
      </label> */
}


// let mappedRadioOptions = radioOptions.map((option) => (
//   <label key={option.index}>
//     <input
//       type="radio"
//       value={option.value}
//       checked={props.setSelectedOption === option.value}
//       onChange={props.handleChange}
//     />
//     {option.label}
//   </label>
// ));

// { label: 1, value: "option1" },
    // { label: 2, value: "option2" },
    // { label: 3, value: "option3" },
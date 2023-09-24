import React, {ChangeEvent,} from "react";


type SuperRadioTType = {

  handleChange: (e: any) => void;
  options:any [] 
  value?: any
};

export const SuperRadioT = (props: SuperRadioTType) => {


  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleChange(e.currentTarget.value);
}

  let mappedRadioOptions = props.options.map((option) => (
    <label key={option} >
      <input
        type="radio"
        value={option}
        checked={props.value === option}
        onChange={onChangeCallback}
      />
      {option}
    </label>
  ));

  return <div>{mappedRadioOptions}</div>;


};

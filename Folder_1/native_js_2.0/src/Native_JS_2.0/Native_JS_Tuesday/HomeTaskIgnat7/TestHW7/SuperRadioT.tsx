import React, {ChangeEvent,} from "react";


type SuperRadioTType = {
<<<<<<< HEAD
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
=======
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    options: any []
};

export const SuperRadioT = (props: SuperRadioTType) => {

    let mappedRadioOptions = props.options.map((option) => (
        <label key={option}>
            <input
                type="radio"
                // value={option}
                checked={props.value === option.toString()}
                onChange={props.handleChange}
            />
            {option}
        </label>
    ));

    return <div>{mappedRadioOptions}</div>;
>>>>>>> 37dc46892675173cb4cfb7921e0219b56b56a30d
};



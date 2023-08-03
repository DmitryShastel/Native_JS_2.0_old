import React, {ChangeEvent,} from "react";


type SuperRadioTType = {
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
};



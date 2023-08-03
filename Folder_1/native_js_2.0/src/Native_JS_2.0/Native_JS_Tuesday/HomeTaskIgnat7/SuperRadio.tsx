import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Radio} from "@mui/material";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: string[]
    onChangeOption: (option: string) => void
}

export const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.target.value);
    }


    const mappedOptions: JSX.Element[] = options ? options.map((o: string, i: number) => (
        <label key={name + '-' + i}>
            <Radio
                color='info'
                value={o}
                checked={value === o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            <div>   {mappedOptions}</div>

        </>
    )
}
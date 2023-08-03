import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {FormControl, InputLabel,  MenuItem, Select, SelectChangeEvent, SelectProps} from "@mui/material";




type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption: (option: string) => void
}


export const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options.map((option) => (
        <MenuItem key={option} value={option}>{option}</MenuItem>
    ))

    const onChangeCallback = (e: SelectChangeEvent<string>) => {
        onChange && onChange(e as unknown as ChangeEvent<HTMLSelectElement>)
        onChangeOption && onChangeOption(e.target.value as string);
    }

    return (
        <FormControl >
            <InputLabel>{restProps['aria-label']}</InputLabel>
            <Select  onChange={onChangeCallback} {...restProps  as SelectProps<string>}>
                {mappedOptions}
            </Select>
        </FormControl>

    )
}
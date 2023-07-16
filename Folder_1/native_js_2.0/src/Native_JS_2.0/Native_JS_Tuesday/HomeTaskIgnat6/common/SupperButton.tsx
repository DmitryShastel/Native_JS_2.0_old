import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SupperButton.module.css";
import Button from "@mui/material/Button";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

//импортируем из hw2
export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className ? className : ""}`;

    return (
        <Button variant="outlined" color="primary">
            {/*className={finalClassName}*/}
            {/*// отдаём кнопке остальные пропсы если они есть (children там внутри)*/}
            <div>{restProps.children}</div>


        </Button>
    );
}
import React, { ChangeEvent } from "react";

type PropsType = {
  callBack: () => void;
  isDone: boolean;
};

export const SuperCheckbox = (props: PropsType) => {
  let onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.callBack();
  };

  return <input checked={props.isDone} onChange={onChangeHandler} />;
};

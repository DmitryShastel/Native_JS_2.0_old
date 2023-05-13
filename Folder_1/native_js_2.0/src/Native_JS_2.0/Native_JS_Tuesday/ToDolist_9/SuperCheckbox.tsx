import React, { ChangeEvent } from "react";

type PropsType = {
  callBack: (newIsDone: boolean) => void;
  isDone: boolean;
};

export const SuperCheckbox = (props: PropsType) => {
  let onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.callBack(event.currentTarget.checked);
  };

  return <input checked={props.isDone} onChange={onChangeHandler} />;
};

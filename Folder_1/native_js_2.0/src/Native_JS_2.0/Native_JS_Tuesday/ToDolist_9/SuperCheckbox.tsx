import React, { ChangeEvent } from "react";


//принимает только свои пропсы (id(s) не должны приходить)
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

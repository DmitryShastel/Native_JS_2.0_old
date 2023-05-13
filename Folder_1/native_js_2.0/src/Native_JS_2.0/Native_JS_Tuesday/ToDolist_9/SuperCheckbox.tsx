import React from "react";

type PropsType = {
  callBack: () => void;
  isDone: boolean;
};

export const SuperCheckbox = (props: PropsType) => {
  let onChangeHandler = () => {
    props.callBack();
  };

  return <input checked={props.isDone} onChange={onChangeHandler} />;
};

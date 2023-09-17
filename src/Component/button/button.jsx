import React, { useState, useEffect } from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <>
      <button
        className={props.classBtn}
        onClick={(e) => {
          // setBtnValue(props.value.slice(0,props.value.length-1));
          //  console.log(btnValue)
          props.tipValue(props.value.slice(0, props.value.length - 1));
        }}
      >
        {props.value}
      </button>
    </>
  );
};

export default Button;

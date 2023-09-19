import React, { useState,useEffect } from "react";
import "./input.scss";

const Input = ({img,imgtype,...otherProps}) => {

  return (
    <div className="input-div">
      <span>{imgtype ? <img src={img} width="50%" /> : "$"}</span>
      <input
        {...otherProps}
      />
    </div>
  );
};

export default Input;

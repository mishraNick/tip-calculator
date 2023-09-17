import React, { useState,useEffect } from "react";
import "./input.scss";

const Input = ({img,imgtype,...otherProps}) => {

  // const [input,setInput]=useState("")

  // const setInputValue=(bill)=>{
  //   setInput(bill)
  //   // console.log(input)
  //   }

  
  // useEffect(() => {
  //   // setCalculation(() => count * 2);
  //   console.log(input)
    
  //   // setBill(input)
  //   // props.getValue(input)
  // }, [input]);


  // console.log(input)
// console.log(props.placeValue)

  return (
    <div className="input-div">
      <span>{imgtype ? <img src={img} width="50%" /> : "$"}</span>
      <input
        {...otherProps}
        // type="number"     
        // name="bill"
        // id="bill"
        // value={props.value}
        // // placeholder={props.placeValue}
        // placeholder={props.id=='customInput' ?"custom":0}     
        // onChange={(e)=>
        //   {
        //      //  setInput(e.target.value); 
        //     // setInput(e.target.value)          
        //     // console.log(e.target.value,input)
        //       if(props.id=='billInput')
        //       {
        //         props.getValue(e.target.value)
        //       }else if(props.id=='memberInput')
        //       {
        //         props.getPeople(e.target.value)
        //       }
        //       else if(props.id=='customInput')
        //       {
        //         props.tipValue(e.target.value)
        //       }
        //     }
          // }
      />
    </div>
  );
};

export default Input;

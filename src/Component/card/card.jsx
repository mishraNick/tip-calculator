import "./card.scss";
import Input from "../input_div/input";
import Button from "../button/button";
import memberImage from "../../assets/images/icon-person.svg";
import rupeeImage from "../../assets/images/rupee.png";

import { useState } from "react";

const Card = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [peopleNumber, setPeopleNumber] = useState("");
  const [customInput, setCustomInput] = useState("");


  const handleChange = (event) => {
    const { name, value } = event.target;

    //  console.log(name,value,event.target)
    //  setBill(value)
    
    if (name == "billInput") {
      setBill(value);
    } else if (name == "customInput") {
      customTip(value);
    } else if (name == "memberInput") {
      setPeopleNumber(value);
    }
  };


  const calculateTip = (percentTip) => { 
    let realTip = (bill * percentTip) / 100;
    setTip(realTip);
    // setCustomInput(percentTip);
    // console.log(bill, percentTip, realTip);
  };

  const customTip=(tipAmount)=>{
    // let realTip = (bill * percentTip) / 100;
    setTip(tipAmount);
    setCustomInput(tipAmount);
    // console.log(bill, percentTip, realTip);
  }

  const resetValues = () => {
    setBill("");
    setCustomInput("");
    setPeopleNumber("");
  };

  let perPersonTip = tip / peopleNumber;
  let perPersonAmount = bill / peopleNumber;

  // console.log(bill, peopleNumber, tip, perPersonTip, perPersonAmount);

  return (
    <div className="card">
      <div className="card__input-box">
        <div className="input-bill">
          <p className="para-heading">Bill</p>
          <Input
            name="billInput"
            value={bill}
            img={rupeeImage}
            placeholder="0"
            imgtype={true}
            onChange={handleChange}
          />
          {/* <Input name="bill2Input" value={tip} img={rupeeImage} imgtype = {true} onChange={handleChange} /> */}
          {/* <Input id="billInput" value={bill} img={rupeeImage} imgtype = {true} getValue={getBill} /> */}
        </div>

        <div className="input-tip-container">
          <p className="para-heading">Select tip %</p>
          <div className="btn-container">
            <Button classBtn={"btn"} value="5%" tipValue={calculateTip} />
            <Button classBtn={"btn"} value="10%" tipValue={calculateTip} />
            <Button classBtn={"btn"} value="15%" tipValue={calculateTip} />
            <Button classBtn={"btn"} value="25%" tipValue={calculateTip} />
            <Button classBtn={"btn"} value="50%" tipValue={calculateTip} />

            <Input
              name="customInput"
              value={customInput}
              img={rupeeImage}
              imgtype={true}
              placeholder="Custom"
              onChange={handleChange}
            ></Input>
          </div>
        </div>

        <div className="input-people-container">
          <p className="para-heading">Number of people</p>
          
          <Input
            name="memberInput"
            value={peopleNumber}
            img={memberImage}
            imgtype={true}
            placeholder="0"
            onChange={handleChange}
          ></Input>
        </div>
      </div>

      <div className="card__reset-box">
        <div className="amount-div">
          <div className="amount-left-content">
            <p className="para-heading amount-head">Tip Amount</p>
            <p className="amount-sub-head">/ person</p>
          </div>

          <div className="amount-right-content">
            <img src={rupeeImage} />
            <input
              type="number"
              value={perPersonTip}
              placeholder="0.00"
              disabled
            />
          </div>
        </div>

        <div className="amount-div">
          <div className="amount-left-content">
            <p className="para-heading amount-head">Total</p>
            <p className="amount-sub-head">/ person</p>
          </div>

          <div className="amount-right-content">
            <img src={rupeeImage} />
            <input
              type="number"
              value={perPersonAmount}
              placeholder="0.00"
              disabled
            />
          </div>
        </div>

        <div className="btn-area">
          <button className="reset-btn" onClick={resetValues}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

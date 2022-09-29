import React, { useState } from "react";
import Card from "../UI/Card";
import "./SpellMessage.css";
import "./SpellText.css";
import SpellMessage from "./SpellMessage";

const SpellText = (props) => {
  const [input1, setInput1] = useState("");
  const [massage, setMassage] = useState("");
  const items = props.text.split("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.text === input1) {
      setMassage("Correct!");
    } else {
      setMassage("Incorrect! Please input again!");
    }
  };
  return (
    <Card className='spell__text'>
      <div className='spell__text--box'>
        {items.map((item, index) => {
          if (input1.split("")[index] === undefined) {
            return (
              <span status='input' key={index}>
                {input1.split("")[index]}
              </span>
            );
          } else {
            return (
              <span status='inputed' key={index}>
                {input1.split("")[index]}
              </span>
            );
          }
        })}
      </div>
      <form>
        <div className='spell__text--input'>
          <input
            type='text'
            size='25'
            value={input1}
            onChange={(e) => {
              setInput1(e.target.value.toUpperCase());
            }}
          />
          <button
            className='btn spell__button--enter'
            onClick={handleSubmit}
            type='summit'>
            Enter
          </button>
          <button className='btn spell__button--hint'>Hint</button>
        </div>
      </form>
      <SpellMessage textH={massage} />
    </Card>
  );
};

export default SpellText;

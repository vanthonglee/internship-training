import React from "react";
import Card from "../UI/Card";
import "./SpellText.css";

const SpellText = () => {
  return (
    <Card className='spell__text'>
      <div className='spell__text--box'>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
      </div>
      <div className='spell__text--input'>
        <input type={Text} size='25' />
      </div>
    </Card>
  );
};

export default SpellText;

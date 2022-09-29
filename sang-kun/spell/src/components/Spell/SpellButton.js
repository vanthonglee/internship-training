import React from "react";
import Card from "../UI/Card";
import "./SpellButton.css";

const SpellButton = () => {
  return (
    <Card className='spell__button'>
      <div className='spell__button--item'>
        <button className='btn spell__button--hint'>Hint</button>
        <button className='btn spell__button--play'>Play</button>
        <button className='btn spell__button--enter'>Enter</button>
      </div>
    </Card>
  );
};

export default SpellButton;

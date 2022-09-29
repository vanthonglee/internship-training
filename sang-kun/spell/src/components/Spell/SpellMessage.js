import React from "react";
import Card from "../UI/Card";
import "./SpellMessage.css";

const SpellMessage = () => {
  return (
    <Card className='spell__message'>
      <div className='spell__message--content'>
        Incorrect! Please input text again!
      </div>
    </Card>
  );
};

export default SpellMessage;

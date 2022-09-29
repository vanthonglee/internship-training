import React from "react";
import "./SpellMessage.css";

const SpellMessage = (props) => {
  return (
    <div className='spell__message'>
      <div className='spell__message--content'>{props.textH}</div>
    </div>
  );
};

export default SpellMessage;

import React from "react";
import "./SpellResult.css";
import Card from "../UI/Card";

const SpellResult = () => {
  return (
    <Card className='spell__result'>
      <div className='spell__result--content'>
        <h3>Total of the number of correct spellings = 10</h3>
      </div>
      <div className='spell__result--content'>
        <h3>Total number of words attempted = 100</h3>
      </div>
      <div className='spell__result--content'>
        <h3>Percentage of successful entries = 10%</h3>
      </div>
    </Card>
  );
};

export default SpellResult;

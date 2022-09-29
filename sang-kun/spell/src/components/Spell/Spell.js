import React from "react";
import Card from "../UI/Card";
import "./Spell.css";
import SpellText from "./SpellText";
import SpellButton from "./SpellButton";
import SpellResult from "./SpellResult";

const Spell = () => {
  const text = "hello".toUpperCase();
  return (
    <Card className='spell'>
      <SpellText text={text} />
      <SpellButton text={text} />
      <SpellResult />
    </Card>
  );
};

export default Spell;

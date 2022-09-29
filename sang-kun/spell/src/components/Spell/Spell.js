import React from "react";
import Card from "../UI/Card";
import "./Spell.css";
import SpellText from "./SpellText";
import SpellButton from "./SpellButton";
import SpellMessage from "./SpellMessage";
import SpellResult from "./SpellResult";

const Spell = () => {
  return (
    <Card className='spell'>
      <SpellText />
      <SpellMessage />
      <SpellButton />
      <SpellResult />
    </Card>
  );
};

export default Spell;

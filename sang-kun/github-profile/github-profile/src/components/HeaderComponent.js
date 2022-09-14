import React from "react";
import DarkModeToggle from "./DarkMode.js";
import "../App.css";

const Header = () => {
  return (
    <div className='flex-container item1 mr-b header1'>
      <div className='flex1'>
        <p className='while'>Github Profile</p>
      </div>

      <div className='flex8'>
        <form action=''>
          <input
            type='text'
            className='input'
            placeholder='Input name github'
          />
          <button className='btn' type='sumbit'>
            Search
          </button>
        </form>
      </div>

      <DarkModeToggle />
    </div>
  );
};

export default Header;

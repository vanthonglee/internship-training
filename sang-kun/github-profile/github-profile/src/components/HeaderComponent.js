import React from "react";
import DarkModeToggle from "./DarkMode.js";
import "../App.css";

const Header = () => {
  return (
    <div className='box box--12 grid__inner header--bg'>
      <div className='box box--3'>
        <p className='logo text--white'>Github Profile</p>
      </div>

      <div className='box box--6 '>
        <input type='text' className='input' placeholder='Input name github' />
        <button className='btn' type='sumbit'>
          Search
        </button>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Header;

import React from "react";
import useDarkMode from "use-dark-mode";
import "../App.css";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className='flex1'>
      <input
        type='checkbox'
        id='check'
        className='checkbox1'
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <label htmlFor='check'>
        <i className='fa-solid fa-sun sun'></i>
        <i className='fa-solid fa-moon moon'></i>
        <div className='ball'></div>
      </label>
    </div>
  );
};

export default DarkModeToggle;

import React, { useEffect, useState } from "react";

import "../App.css";

const DarkModeToggle = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  };

  return (
    <div className='box box--3'>
      <input
        type='checkbox'
        id='check'
        className='checkbox1'
        checked={checked}
        onChange={() => toggleThemeChange()}
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

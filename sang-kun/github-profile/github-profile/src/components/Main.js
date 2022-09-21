import DarkModeToggle from "./DarkMode";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    try {
      const res = await Promise.all([
        axios.get(`https://api.github.com/users/${searchInput}`),
        axios.get(`https://api.github.com/users/${searchInput}/repos`),
      ]);
      setUserInfo(res[0].data);
      setRepos(res[1].data);
    } catch (e) {
      console.error(e);
      alert("Username is not valid! \nPlease Input again!");
    }
  };

  return (
    <div className='grid'>
      <div className='box box--12 grid__inner header--bg'>
        <div className='box box--3'>
          <p className='logo text--white'>Github Profile</p>
        </div>
        <div className='box box--6 '>
          <input
            type='text'
            className='input'
            placeholder='Input username from github'
            value={searchInput}
            onChange={handleChange}
          />
          <button className='btn' onClick={handleClick}>
            Search
          </button>
        </div>
        <DarkModeToggle />
      </div>
      <Profile userInfo={userInfo} repos={repos} />
    </div>
  );
};

export default Main;

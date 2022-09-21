import React from "react";
import "../App.css";
const Repo = ({ repo }) => {
  const { name, html_url, forks, stargazers_count } = repo;
  //   console.log(repos1);
  return (
    <div className='box box--6 card card--bg '>
      <p className='mr-bottom'>
        <a href={html_url} className='text--white' target='_blank'>
          {name}
        </a>
      </p>
      <i className='fa-regular fa-star'></i>
      {stargazers_count}
      <i className='fa-solid fa-code-fork mr-left'></i>
      {forks}
    </div>
  );
};

export default Repo;

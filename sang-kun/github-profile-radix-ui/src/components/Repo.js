import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faCodeFork, faStar);

const Repo = ({ repo }) => {
  const { name, html_url, forks, stargazers_count } = repo;
  //   console.log(repos1);
  return (
    <div className='box box--6 card card--bg '>
      <p className='mr-bottom name-repo'>
        <a href={html_url} className='text--white ' target='_blank'>
          {name}
        </a>
      </p>
      <FontAwesomeIcon icon={faStar} className='mr-right' />
      {stargazers_count}
      <FontAwesomeIcon icon={faCodeFork} className='mr-right mr-left' />
      {forks}
    </div>
  );
};

export default Repo;

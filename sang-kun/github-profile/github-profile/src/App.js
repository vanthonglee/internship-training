import logo from "./img/logo.png";
import "./App.css";
import DarkModeToggle from "./components/DarkMode";
import Header from "./components/HeaderComponent";

function App() {
  return (
    <div className='grid-container'>
      <Header />

      <div className='item2 '>
        <img className='img' src={logo} alt='anh' />
        <p> Name </p>
        <p> UserName </p>
        <p> 5k follower </p>
        <p> 19 Repositories </p>
      </div>

      <div className='grid-container1 item3 '>
        <div className='card'>
          <p>
            <a href=''> Repositories 1 </a>
          </p>
          <i className='fa-regular fa-star '></i>123
          <i className='fa-solid fa-code-fork'></i>123
        </div>

        <div className='card'>
          <p>
            <a href=''>Repositories 2 </a>
          </p>
          <i className='fa-regular fa-star '></i>345
          <i className='fa-solid fa-code-fork '></i>345
        </div>

        <div className='card'>
          <p>
            <a href=''> Repositories 3 </a>
          </p>
          <i className='fa-regular fa-star'></i>234
          <i className='fa-solid fa-code-fork '></i>233
        </div>

        <div className='card'>
          <p>
            <a href=''> Repositories4 </a>
          </p>
          <i className='fa-regular fa-star'></i>234
          <i className='fa-solid fa-code-fork'></i>233
        </div>
      </div>
    </div>
  );
}

export default App;

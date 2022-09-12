import logo from "./img/logo.png";
import "./App.css";

function App() {
  return (
    <div className='grid-container'>
      <div className='flex-container item1 mr-b'>
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

        <div className='flex1'>
          <input type='checkbox' id='check' className='checkbox1' />
          <label htmlFor='check'>
            <i className='fa-solid fa-moon moon'></i>
            <i className='fa-solid fa-sun sun'></i>
            <div className='ball'></div>
          </label>
        </div>
      </div>

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
            <a href=''> Repositories 2 </a>
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

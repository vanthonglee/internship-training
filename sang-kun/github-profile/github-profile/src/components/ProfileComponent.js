import logo from "../img/logo.png";
const Profile = () => {
  return (
    <div className='box box--12 grid__inner mr-top'>
      <div className=' box box--4'>
        <div className='gird1__item text--profile'>
          <img className='img' src={logo} alt='anh' />
          <p> Name </p>
          <p> UserName </p>
          <p> 5k follower </p>
          <p> 19 Repositories </p>
        </div>
      </div>
      <div className='box box--8 grid__inner'>
        <div className='box box--6 card card--bg '>
          <p className='mr-bottom'>
            <a href='' className='text--white'>
              Repositories 1
            </a>
          </p>
          <i className='fa-regular fa-star'></i>123
          <i className='fa-solid fa-code-fork mr-left'></i>123
        </div>

        <div className='box box--6 card card--bg'>
          <p className='mr-bottom'>
            <a href='' className='text--white'>
              Repositories 1
            </a>
          </p>
          <i className='fa-regular fa-star'></i>123
          <i className='fa-solid fa-code-fork mr-left'></i>123
        </div>

        <div className='box box--6 card card--bg'>
          <p className='mr-bottom'>
            <a href='' className='text--white'>
              Repositories 1
            </a>
          </p>
          <i className='fa-regular fa-star'></i>123
          <i className='fa-solid fa-code-fork mr-left'></i>123
        </div>

        <div className='box box--6 card card--bg'>
          <p className='mr-bottom'>
            <a href='' className='text--white'>
              Repositories 1
            </a>
          </p>
          <i className='fa-regular fa-star'></i>123
          <i className='fa-solid fa-code-fork mr-left'></i>123
        </div>
      </div>
    </div>
  );
};

export default Profile;

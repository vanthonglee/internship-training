import Repo from "./Repo";
import "../App.css";
const Profile = (props) => {
  const { userInfo, repos } = props;
  // console.log(repos[0].name);
  if (userInfo?.login === undefined) {
    return <div></div>;
  } else {
    return (
      <div className='box box--12 grid__inner mr-top'>
        <div className=' box box--4'>
          <div className='gird1__item text--profile'>
            <img className='img' src={userInfo?.avatar_url} alt='anh' />
            <p className='font--size'> {userInfo?.name} </p>
            <p> {userInfo?.login} </p>
            <p> {userInfo?.followers} Followers</p>
            <p> {userInfo?.following} Following</p>
            <p> {repos?.length} Repo</p>
          </div>
        </div>
        <div className='box box--8 grid__inner'>
          {repos
            .sort((a, b) => {
              return (
                b?.stargazers_count + b?.forks - a?.stargazers_count - a?.forks
              );
            })
            .slice(0, 4)
            .map((repo) => {
              return <Repo repo={repo} key={repo.id} />;
            })}
        </div>
      </div>
    );
  }
};

export default Profile;

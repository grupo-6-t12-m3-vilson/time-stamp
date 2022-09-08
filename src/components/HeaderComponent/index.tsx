import { useContext } from 'react';

import { CgMoon, CgPlayTrackNextR } from 'react-icons/cg';
import { BiSun } from 'react-icons/bi';
import { UserContext } from '../../contexts/UserContext';

import { HeaderContainer } from './styles';
import InputSearchVideos from '../InputSearchVideos';
import Profile from '../Profile';

function HeaderComponent() {
  const { themeDark, theme } = useContext(UserContext);
  const token = localStorage.getItem('@time-stamp:token');
  return (
    <HeaderContainer token={token}>
      <div className='logo'>
        <h1>time stamp</h1>
        <CgPlayTrackNextR />
      </div>
      <div className='search-theme'>
        {token ? (
          <>
            <InputSearchVideos></InputSearchVideos>
            <Profile></Profile>
          </>
        ) : (
          <div className='theme'>
            <button onClick={() => themeDark()}>
              {!theme ? <CgMoon size='2rem' /> : <BiSun size={'2em'} />}
            </button>
          </div>
        )}
      </div>
    </HeaderContainer>
  );
}

export default HeaderComponent;

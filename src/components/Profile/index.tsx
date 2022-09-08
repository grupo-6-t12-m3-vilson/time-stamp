import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { FaUserCircle } from 'react-icons/fa';

import { ContainerProfile, MenuProfile } from './styles';

const Profile = () => {
  const { themeDark } = useContext(UserContext);
  const { dropDown, setDropDown, logout } = useContext(UserContext);

  return (
    <ContainerProfile>
      <button onClick={() => setDropDown(!dropDown)}>
        <FaUserCircle />
      </button>
      <MenuProfile style={{ display: dropDown ? 'flex' : 'none' }}>
        <p onClick={() => themeDark()}>Tema</p>
        <p onClick={logout}>Sair</p>
      </MenuProfile>
    </ContainerProfile>
  );
};

export default Profile;

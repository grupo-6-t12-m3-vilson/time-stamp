import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FaUserCircle } from "react-icons/fa";

import { ContainerProfile, MenuProfile } from "./styles";

const Profile = () => {
  const { themeDark } = useContext(UserContext);
  const { dropDown, setDropDown } = useContext(UserContext);
  return (
    <ContainerProfile>
      <button onClick={() => setDropDown(!dropDown)}>
        <FaUserCircle />
      </button>
      <MenuProfile style={{ display: dropDown ? "flex" : "none" }}>
        <p>Sair</p>
        <p onClick={() => themeDark()}>Tema</p>
      </MenuProfile>
    </ContainerProfile>
  );
};

export default Profile;

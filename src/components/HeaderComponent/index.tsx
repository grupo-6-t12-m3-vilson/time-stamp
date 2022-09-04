import { useContext } from "react";

import { CgMoon, CgPlayTrackNextR } from "react-icons/cg";
import { BiSun } from "react-icons/bi";
import { UserContext } from "../../contexts/UserContext";

import { HeaderContainer } from "./styles";

function HeaderComponent() {
  const { themeDark, theme } = useContext(UserContext);
  return (
    <HeaderContainer>
      <div className="logo">
        <h1>time stamp</h1>
        <CgPlayTrackNextR />
      </div>
      <div className="theme">
        <button onClick={() => themeDark()}>
          {!theme ? <CgMoon size="2rem" /> : <BiSun size={"2em"} />}
        </button>
      </div>
    </HeaderContainer>
  );
}

export default HeaderComponent;

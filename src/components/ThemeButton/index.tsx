import { CgMoon } from "react-icons/cg";
import { BiSun } from "react-icons/bi";

import { BoxTheme } from "./styles";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const ThemeButton = () => {
  const { themeDark, theme } = useContext(UserContext);
  return (
    <BoxTheme>
      <button onClick={() => themeDark()}>
        {!theme ? <CgMoon size="2rem" /> : <BiSun size={"2em"} />}
      </button>
    </BoxTheme>
  );
};

export default ThemeButton;

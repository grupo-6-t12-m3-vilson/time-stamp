import HeaderComponent from "../HeaderComponent";

import { BoxHeaderLogin } from "./styles";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";

const HeaderComponentLogin = () => {
  return (
    <HeaderComponent>
      <BoxHeaderLogin>
        <Logo></Logo>
        <ThemeButton></ThemeButton>
      </BoxHeaderLogin>
    </HeaderComponent>
  );
};

export default HeaderComponentLogin;

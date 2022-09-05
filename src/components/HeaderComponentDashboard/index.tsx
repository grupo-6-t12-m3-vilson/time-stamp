import HeaderComponent from "../HeaderComponent";

import { BoxHeaderDashboard } from "./styles";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";

const HeaderComponentDashboard = () => {
  return (
    <HeaderComponent>
      <BoxHeaderDashboard>
        <Logo></Logo>
        <ThemeButton></ThemeButton>
      </BoxHeaderDashboard>
    </HeaderComponent>
  );
};

export default HeaderComponentDashboard;

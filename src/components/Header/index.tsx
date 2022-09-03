import { GoSearch } from "react-icons/go";

import logo from "../../assets/logo.svg";

import { ContainerHeader } from "./styles";

const Header = () => {
  return (
    <ContainerHeader>
      <h2>time stamp</h2>
      <img src={logo} />
    </ContainerHeader>
  );
};

export default Header;

import { GoSearch } from "react-icons/go";

import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.svg";

import { ContainerHeader, Form, Profile, Search } from "./styles";

const Header = () => {
  return (
    <ContainerHeader>
      <section>
        <h2>time stamp</h2>
        <img src={logo} />
      </section>
      <section>
        <Form>
          <input
            type="text"
            placeholder="pesquisar por..."
            className="input-search"
          />
          <Search>
            <GoSearch />
          </Search>
        </Form>
        <Profile>
          <img src={profile} />
        </Profile>
      </section>
    </ContainerHeader>
  );
};

export default Header;

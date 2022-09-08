import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { UserContext } from "../../contexts/UserContext";

import { BoxInputSearch } from "./styles";

const InputSearchVideos = () => {
const {filterInput} = useContext(UserContext)

  return (
    <BoxInputSearch>
      <input type="text" placeholder="Pesquise aqui" onChange={(e) => filterInput(e.target.value)} />
      <GoSearch />
    </BoxInputSearch>
  );
};

export default InputSearchVideos;

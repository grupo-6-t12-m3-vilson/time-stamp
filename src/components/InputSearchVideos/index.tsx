import { GoSearch } from "react-icons/go";

import { BoxInputSearch } from "./styles";

const InputSearchVideos = () => {
  return (
    <BoxInputSearch>
      <input type="text" placeholder="Pesquise aqui" />
      <GoSearch />
    </BoxInputSearch>
  );
};

export default InputSearchVideos;

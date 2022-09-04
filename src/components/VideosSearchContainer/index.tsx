import { ContainerVideoSearch } from "./styles";
import CardVideoSearch from "../../components/CardVideoSearch";

const VideosSearchContainer = () => {
  return (
    <ContainerVideoSearch>
      {/* Se o array de videos for maior que zer0 e houver um valor no state da pesquisa que corresponder a um nome de marcador(includes): chama a ul... se não: chama o span */}

      {/* <ul>
        <li>
          <CardVideoSearch></CardVideoSearch>
        </li>
        <li>
          <CardVideoSearch></CardVideoSearch>
        </li>
        <li>
          <CardVideoSearch></CardVideoSearch>
        </li>
      </ul> */}
      <span>Pesquise por um marcador existente</span>
    </ContainerVideoSearch>
  );
};

export default VideosSearchContainer;

import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import ContainerSprints from "../../components/ContainerSprints";
import ContainerVideosSearch from "../../components/ContainerVideosSearch";
import HeaderComponent from "../../components/HeaderComponent";
import { Container, Main } from "./styles";
import {TiArrowBack} from "react-icons/ti"

const DashboardSprint = () => {

  const {sprintId } = useParams()
  const Navigate = useNavigate()
  
  return (
    <Container>
      <HeaderComponent />
      <TiArrowBack onClick={() => Navigate('/dashboard', { replace: true })}/>
      <Main>
        <ContainerSprints  sprint={sprintId as string} />
        <ContainerVideosSearch></ContainerVideosSearch>
      </Main>
    </Container>
  );
};

export default DashboardSprint;

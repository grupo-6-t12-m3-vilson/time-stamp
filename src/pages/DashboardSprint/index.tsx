import { useParams } from "react-router";
import ContainerSprints from "../../components/ContainerSprints";
import ContainerVideosSearch from "../../components/ContainerVideosSearch";
import HeaderComponent from "../../components/HeaderComponent";
import { Container, Main } from "./styles";

const DashboardSprint = () => {

  const {sprintId } = useParams()

  
  return (
    <Container>
      <HeaderComponent />
      <Main>
        <ContainerSprints  sprint={sprintId as string} />
        <ContainerVideosSearch></ContainerVideosSearch>
      </Main>
    </Container>
  );
};

export default DashboardSprint;

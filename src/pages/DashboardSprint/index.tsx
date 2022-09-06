import ContainerSprints from "../../components/ContainerSprints";
import ContainerVideosSearch from "../../components/ContainerVideosSearch";
import HeaderComponent from "../../components/HeaderComponent";
import { Container, Main } from "./styles";

const DashboardSprint = () => {
  return (
    <Container>
      <HeaderComponent />
      <Main>
        <ContainerSprints />
        <ContainerVideosSearch></ContainerVideosSearch>
      </Main>
    </Container>
  );
};

export default DashboardSprint;

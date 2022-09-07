import { useContext } from "react";


import Card from "../../components/Card";
import HeaderComponent from "../../components/HeaderComponent";
import ContainerVideosSearch from "../../components/ContainerVideosSearch";

import { UserContext } from "../../contexts/UserContext";

import { Container, ContainerSprint, Main } from "./styles";

const Dashboard = () => {
  const { card } = useContext(UserContext);

  

  return (
    <Container>
      <HeaderComponent />
      <Main>
        <ContainerSprint>
          <ul>
            {card.map((data, index) => (
              <Card
                key={index}
                module={data.module}
                sprint={data.sprint}
                dia={data.dia}
                navigate={data.sprint}
              />
            ))}
          </ul>
        </ContainerSprint>
        <ContainerVideosSearch></ContainerVideosSearch>
      </Main>
    </Container>
  );
};

export default Dashboard;

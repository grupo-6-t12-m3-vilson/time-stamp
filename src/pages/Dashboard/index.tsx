import { useContext, useState } from "react";


import Card from "../../components/Card";
import HeaderComponent from "../../components/HeaderComponent";
import ContainerVideosSearch from "../../components/ContainerVideosSearch";

import { UserContext } from "../../contexts/UserContext";

import { Container, ContainerSprint, Main } from "./styles";

 interface ICard {
  module: string;
  dia: string;
  sprint: number;
}

const Dashboard = () => {
 
  const [card, setCard] = useState([
    { module: 'M3', dia: '05/07/22', sprint: 1 },
    { module: 'M3', dia: '12/07/22', sprint: 2 },
    { module: 'M3', dia: '21/07/22', sprint: 3 },
    { module: 'M3', dia: '28/07/22', sprint: 4 },
    { module: 'M3', dia: '05/08/22', sprint: 5 },
    { module: 'M3', dia: '12/08/22', sprint: 6 },
    { module: 'M3', dia: '19/08/22', sprint: 7 },
    { module: 'M3', dia: '28/08/22', sprint: 8 },
  ]);
  
  
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

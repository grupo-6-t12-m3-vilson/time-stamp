import { useContext } from "react";

import Card from "../../components/Card";
import HeaderComponent from "../../components/HeaderComponent";
import { UserContext } from "../../contexts/UserContext";

import { ContainerSprint, Main } from "./styles";

const Dashboard = () => {
  const { card } = useContext(UserContext);
  return (
    <>
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
              />
            ))}
          </ul>
        </ContainerSprint>
      </Main>
    </>
  );
};

export default Dashboard;

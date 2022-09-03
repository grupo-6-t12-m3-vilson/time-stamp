import { useContext, useState } from "react";
import { StringSchema } from "yup";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Video from "../../components/Video";
import { UserContext } from "../../contexts/UserContext";
import { ContainerSprint, ContainerVideo, Main } from "./styles";

const Dashboard = () => {
  const { card } = useContext(UserContext);
  return (
    <Main>
      <Header />

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

      <ContainerVideo>
        <Video />
      </ContainerVideo>
    </Main>
  );
};

export default Dashboard;

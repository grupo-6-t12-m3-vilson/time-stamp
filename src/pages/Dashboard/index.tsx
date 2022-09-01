import { useContext, useState } from "react";
import { StringSchema } from "yup";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Video from "../../components/Video";
import { UserContext } from "../../contexts/UserContext";
import { ContainerSprint, ContainerVideo, Main } from "./styles";

const Dashboard = () => {
  const { card, videos } = useContext(UserContext);
  return (
    <Main>
      <Header />
      <ContainerSprint>
        <ul>
          {card.map((data) => (
            <Card module={data.module} sprint={data.sprint} dia={data.dia} />
          ))}
        </ul>
      </ContainerSprint>

      <ContainerVideo>
        <ul>
          {videos.map((dataVideo) => (
            <Video
              url={dataVideo.url}
              day={dataVideo.day}
              time_video={dataVideo.time_video}
              title={dataVideo.title}
            />
          ))}
        </ul>
      </ContainerVideo>
    </Main>
  );
};

export default Dashboard;

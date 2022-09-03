import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IProps } from "./interface";
import { Container } from "./styles";

const Video = () => {
  const { videos } = useContext(UserContext);

  return (
    <Container>
      {videos.map((dataVideo, index) => (
        <li key={index}>
          <video controls src={dataVideo.url} width={300} height={300} />
          <div>
            <h2>Demo - {dataVideo.day}</h2>
            <span>
              {dataVideo.time_video} - {dataVideo.title}
            </span>
          </div>
        </li>
      ))}
    </Container>
  );
};

export default Video;

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Card, InfosCard } from "./styles";

const CardVideoSearch = () => {

  const {videos, filterVideos} = useContext(UserContext)
  /* testeee */
  const link =
    "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_1/GMT20220718-123537_Recording_1920x1080.mp4";

  const title = "Demo alguma coisa";

  const time = "20:00";
  const description = "UseEffect";
  /* testeee */

return (
  <>
  {(filterVideos.length > 0 ? filterVideos : videos).map
  ((video) => (
    <Card key={video.id}>
      <video>
        <source src={video.url} type="video/mp4" />
      </video>
      {video.marks.map((mark) => (
        <InfosCard key={mark.id}>
    <div>
      <h3>{mark.title}</h3>
    </div>
    <div>{mark.time_video}</div>
      </InfosCard>
        ))}
      </Card>
  ))
  }

  </>

)

 /*  return (
    <Card>
      <video>
        <source src={link} type="video/mp4" />
      </video>
      <InfosCard>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <span>{time}</span> - <span>{description}</span>
        </div>
      </InfosCard>
    </Card>
  ); */
};

export default CardVideoSearch;

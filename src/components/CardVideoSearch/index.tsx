import { Card, InfosCard } from "./styles";

const CardVideoSearch = () => {
  /* testeee */
  const link =
    "https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_1/GMT20220718-123537_Recording_1920x1080.mp4";

  const title = "Demo alguma coisa";

  const time = "20:00";
  const description = "UseEffect";
  /* testeee */

  return (
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
  );
};

export default CardVideoSearch;

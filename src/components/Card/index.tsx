import { HiOutlineBookOpen } from "react-icons/hi";
import { useNavigate } from "react-router";

import { IProps } from "./interface";

import { Container, IconContainer } from "./styles";

const Card = ({ module, sprint, dia , navigate}: IProps) => {
  const navigateLink = useNavigate()

  return (
    <Container onClick={() => {navigateLink(`sprint/${navigate}`)}}>
      <h2>
        {module} - Sprint {sprint}
      </h2>
      <p>Atualizado em: {dia}</p>

      <IconContainer>
        <HiOutlineBookOpen size={40} />
      </IconContainer>
    </Container>
  );
};

export default Card;

import { HiOutlineBookOpen } from "react-icons/hi";

import { IProps } from "./interface";

import { Container, IconContainer } from "./styles";

const CardSprint = ({ module, sprint, dia }: IProps) => {
  return (
    <Container>
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

export default CardSprint;

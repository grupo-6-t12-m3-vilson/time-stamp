import { useState } from "react";

import LiContainer from "./LiContainer";
import Ul from "./styles";

const NavDay = () => {
  const [showDay] = useState([
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Extra",
  ]);

  return (
    <Ul>
      {showDay.map((day, index) => (
        <LiContainer key={index}>{day}</LiContainer>
      ))}
    </Ul>
  );
};

export default NavDay;

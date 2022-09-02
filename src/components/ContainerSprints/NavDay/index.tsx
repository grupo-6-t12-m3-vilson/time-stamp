import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import LiContainer from "./LiContainer";
import  Ul  from "./styles";
// import { Container } from './styles';

const NavDay = () => {
  const [showDay] = useState(["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Extra"])  

  return (
    <Ul>      
        {showDay.map((day, index) => (
          <LiContainer key={index}>
            {day}
          </LiContainer>            
        ))     
        } 
    </Ul>
  );
};

export default NavDay;

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;

  flex-direction: column;

  min-width: 250px;
  height: 140px;
  gap: 15px;
  padding: 25px;
  cursor: pointer;

  background-color: ${(props) => props.theme.card.background};
  border-left: 3px solid ${(props) => props.theme.card.border};
  box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  h2 {
    font-weight: 700;
    font-size: 23px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.card.color};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    letter-spacing: 0.05em;

    color: ${(props) => props.theme.card.colorP};
  }

  @media (max-width: 650px) {
    min-width: 250px;
    margin-bottom: 20px;
  }

  @media (max-width: 525px) {
    margin-left: 65px;
  }

  @media (max-width: 420px) {
    margin-left: 35px;
  }

  @media (max-width: 350px) {
    margin-left: 8px;
  }
`;

export const IconContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.card.colorIcon};
`;

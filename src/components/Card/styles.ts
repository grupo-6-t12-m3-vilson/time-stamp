import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 15px;
  padding: 15px;

  cursor: pointer;

  background-color: ${(props) => props.theme.card.background};
  border-left: 3px solid ${(props) => props.theme.card.border};
  box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  h2 {
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.card.color};
  }

  p {
    font-family: "Roboto Mono", monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    letter-spacing: 0.05em;

    color: ${(props) => props.theme.card.colorP};
  }

  @media (max-width: 650px) {
    min-width: 220px;
    margin-left: 20px;
  }
`;

export const IconContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  color: ${(props) => props.theme.card.colorIcon};
`;

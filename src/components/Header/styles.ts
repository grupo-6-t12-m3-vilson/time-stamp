import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
  gap: 30px;

  background: ${(props) => props.theme.header.backgroundColor};
  box-shadow: ${(props) => props.theme.header.boxShadow};

  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 95px;
    letter-spacing: 0.05em;

    background: linear-gradient(
      to right,
      ${(props) => props.theme.header.linear1} 40%,
      ${(props) => props.theme.header.linear2} 0
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

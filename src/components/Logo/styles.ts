import styled from "styled-components";

export const BoxLogo = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  padding-left: 37%;
  align-items: center;

  h1 {
    font-family: "Nunito", sans-serif;
    font-size: 2.75rem;
    letter-spacing: 2px;
    font-weight: 700;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.color_logo_left} 45%,
      ${(props) => props.theme.color_logo_right} 45%
    );
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  svg {
    width: 70px;
    height: 50px;
    fill: ${(props) => props.theme.fillHeader};
  }

  @media screen and (max-width: 1024px) {
    padding-left: 10%;
    h1 {
      font-size: 1.75rem;
      letter-spacing: 2px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

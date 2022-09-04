import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 135px;
  width: 100%;
  box-shadow: 1px 1px 15px 10px rgba(0, 0, 0, 0.08);
  color: ${(props) => props.theme.font_color_primary};
  background: ${(props) => props.theme.bg_header};
  max-width: 1440px;
  div.logo {
    display: flex;
    gap: 14px;
    width: 100%;
    padding-left: 37%;
    align-items: center;

    h1 {
      font-family: "Nunito", sans-serif;
      font-size: 2.75rem;
      letter-spacing: 2px;
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
  }

  div.theme {
    width: 10%;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      position: relative;
      background: ${(props) => props.theme.bg_button};

      svg {
        color: ${(props) => props.theme.bg_linear_2};
      }
    }
  }

  @media screen and (max-width: 1024px) {
    div.logo {
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

    div.theme {
      padding-right: 5%;

      button {
        width: 35px;
        height: 35px;
      }
    }
  }
`;

export { HeaderContainer };

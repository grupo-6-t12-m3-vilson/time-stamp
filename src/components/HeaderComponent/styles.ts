import styled from "styled-components";

type PropTypeHeight = {
  token: string | null;
}

const HeaderContainer = styled.header.attrs((props: PropTypeHeight) => ({token: props.token}))<PropTypeHeight>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  color: ${(props) => props.theme.font_color_primary};
  background: ${(props) => props.theme.bg_header};
  max-width: 1440px;

  div.logo {
    display: flex;
    gap: 14px;
    padding-left: 38%;
    align-items: center;

    h1 {
      font-family: "Nunito";
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

  div.search-theme {
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
    gap: 30px;
    width: 23%;
  }

  @media screen and (max-width: 1024px) {
    height: ${props => props.token ? "100px" : "50px"};
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    div.logo {
      position: absolute;
      left: 10%;
      padding-left: 0;
      margin: 0 auto;

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
      position: absolute;
      right: 5%;

      button {
        width: 35px;
        height: 35px;
      }
    }

    div.search-theme {
      display: flex;
      justify-content: center;
      width: 225px;
      margin: 0 30px;
    }
  }
`;

export { HeaderContainer };

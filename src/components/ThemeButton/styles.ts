import styled from "styled-components";

export const BoxTheme = styled.div`
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

  @media screen and (max-width: 1024px) {
    padding-right: 5%;

    button {
      width: 35px;
      height: 35px;
    }
  }
`;

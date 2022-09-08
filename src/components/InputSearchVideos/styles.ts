import styled from "styled-components";

export const BoxInputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  padding: 3px;
  background: ${(props) => props.theme.inputSearchVideo.background};
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;

  input {
    display: none;
  }

  svg {
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.inputSearchVideo.icon};
  }

  &:hover {
    transition: 0.3s;
    width: 18vw;

    input {
      background: transparent;
      border: none;
      outline: none;
      border-radius: 20px;
      transition: 0.3s;
      display: flex;
      transition: 0.3s;
      font-size: 16px;
      font-weight: 500;
      padding-left: 20px;
      width: 70%;
      color: ${(props) => props.theme.inputSearchVideo.font_color};
    }

    input::placeholder {
      color: ${(props) => props.theme.inputSearchVideo.placeholder};
      font-size: 16px;
      font-weight: 500;
    }

    svg {
      padding-left: 5px;
      color: rgba(64, 123, 255, 1);
    }
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 15%;
    right: 5%;
    width: 230px;
    height: 30px;

    input {
      background: transparent;
      border: none;
      outline: none;
      border-radius: 20px;
      transition: 0.3s;
      display: flex;
      transition: 0.3s;
      font-size: 16px;
      font-weight: 500;
      padding-left: 20px;
      width: 75%;
      color: ${(props) => props.theme.inputSearchVideo.font_color};

    }

    svg {
      width: 20px;
      height: 20px;

      &:hover {
        padding-left: 0!important;
      }
    }

    &:hover {
      width: 275px;
    }
  }
`;

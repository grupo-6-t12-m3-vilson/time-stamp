import styled from "styled-components";

export const ContainerVideoSearch = styled.section`
  width: 85vw;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  background: ${(props) => props.theme.containerSearchVideo.background};
  box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.11);
  overflow-y: auto;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: rgba(74, 95, 142, 1);
  }

  ul {
    display: flex;
    width: 100%;
  }

  ::-webkit-scrollbar {
    height: 7px;
  }

  ::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: #96a0b9;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:vertical:hover,
  ::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: #407bff;
  }

  @media (max-width: 650px) {
    span {
      font-size: 14px;
    }
  }
`;

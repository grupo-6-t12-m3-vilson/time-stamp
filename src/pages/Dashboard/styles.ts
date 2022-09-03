import styled from "styled-components";

export const Main = styled.main`
  background: linear-gradient(
    ${(props) => props.theme.dashboard.deg},
    ${(props) => props.theme.dashboard.linear2},
    ${(props) => props.theme.dashboard.linear1},
    ${(props) => props.theme.dashboard.linear2}
  );

  min-height: 100vh;
`;

export const ContainerSprint = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px;

    margin-top: 50px;

    max-width: 1200px;

    @media (max-width: 650px) {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      justify-content: flex-start;

      -webkit-scrollbar {
        height: 10px;
        background-color: linear-gradient(
          ${(props) => props.theme.dashboard.scrollbarDeg},
          ${(props) => props.theme.dashboard.scrollbar2},
          ${(props) => props.theme.dashboard.scrollbar1},
          ${(props) => props.theme.dashboard.scrollbar2}
        );
      }

      -webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 10px;
      }
    }
  }
`;

export const ContainerVideo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

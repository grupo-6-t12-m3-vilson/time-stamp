import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

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

  width: 85%;

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 35px;

    padding-bottom: 1.5rem;

    @media (max-width: 650px) {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;

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

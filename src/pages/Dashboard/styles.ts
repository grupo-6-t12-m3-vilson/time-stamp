import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.dashboard.deg},
    ${(props) => props.theme.dashboard.linear2},
    ${(props) => props.theme.dashboard.linear1},
    ${(props) => props.theme.dashboard.linear2}
  );

  min-height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const ContainerSprint = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

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
      overflow-x: auto;
      margin-top: 0;

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

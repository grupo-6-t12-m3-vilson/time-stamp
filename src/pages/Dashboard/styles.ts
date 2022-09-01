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
  margin-top: 50px;

  max-width: 1400px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      justify-content: flex-start;
    }

    ul::-webkit-scrollbar {
      height: 10px;
      background-color: linear-gradient(
        ${(props) => props.theme.dashboard.scrollbarDeg},
        ${(props) => props.theme.dashboard.scrollbar2},
        ${(props) => props.theme.dashboard.scrollbar1},
        ${(props) => props.theme.dashboard.scrollbar2}
      );
    }

    ul::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 10px;
    }
  }
`;

export const ContainerVideo = styled.section`
  display: flex;
  flex-wrap: wrap;

  margin: 50px 0 50px 15px;
  max-width: 1320px;

  background-color: ${(props) => props.theme.dashboard.backgroundVideo};
  box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.11);
  border-radius: 10px;

  ul {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;

    gap: 30px;
  }

  ul::-webkit-scrollbar {
    height: 5px;
    background-color: linear-gradient(
      ${(props) => props.theme.dashboard.scrollbarDeg},
      ${(props) => props.theme.dashboard.scrollbar2},
      ${(props) => props.theme.dashboard.scrollbar1},
      ${(props) => props.theme.dashboard.scrollbar2}
    );
  }

  ul::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }

  @media (max-width: 1440px) {
    margin-left: 40px;
  }

  @media (max-width: 1024px) {
    margin-left: 20px;
    max-width: 990px;
  }

  @media (max-width: 768px) {
    margin-left: 60px;
    max-width: 650px;
  }

  @media (max-width: 425px) {
    margin-left: 60px;
    max-width: 310px;
  }

  @media (max-width: 375px) {
    margin-left: 30px;
    max-width: 310px;
  }

  @media (max-width: 320px) {
    margin-left: 10px;
    max-width: 300px;
  }
`;

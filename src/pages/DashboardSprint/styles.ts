import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.containerSprints.deg},
    ${(props) => props.theme.containerSprints.linear2},
    ${(props) => props.theme.containerSprints.linear1},
    ${(props) => props.theme.containerSprints.linear2}
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

import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.containerSprints.deg},
    ${(props) => props.theme.containerSprints.linear2},
    ${(props) => props.theme.containerSprints.linear1},
    ${(props) => props.theme.containerSprints.linear2}
  );
  min-height: 100vh;

  > svg {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 5%;
    top: 30px;
    color: ${props => props.theme.profile.icon_color};
    cursor: pointer;

    &:hover {
      transition: 0.2s;
      filter: brightness(2);
    }
  }

  @media screen and (max-width: 1024px) {
    > svg {
      top: 83px;
      left: 6%;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

import styled from "styled-components";

export const ContainerLi = styled.div`
  position: relative;
  height: 74px;
  width: 90%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.21);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  p {
    width: 191px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.containerSprints.font_color_primary};
  }
`;

export const DivSelect = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  gap: 5px;
  padding: 5px;
  height: 100px;
  overflow-y: auto;
  animation: mymove 2s;
`;

export const LiSelect = styled.li`
  cursor: pointer;
  width: 150px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => props.theme.containerSprints.font_color_primary};
`;

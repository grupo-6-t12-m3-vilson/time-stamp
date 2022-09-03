import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  max-width: 1100px;
  flex-wrap: nowrap;
  justify-content: space-between;

  gap: 25px;
  padding: 20px;

  margin-top: 50px;

  background-color: ${(props) => props.theme.video.backgroundColor};
  box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.11);
  border-radius: 10px;

  ::-webkit-scrollbar {
    height: 10px;
    background-color: ${(props) => props.theme.video.backgroundScrollbar};
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }

  li {
    margin-left: 38px;

    h2 {
      font-family: "Roboto Mono", monospace;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.05em;
      color: ${(props) => props.theme.video.color};
    }

    span {
      font-family: "Roboto Mono", monospace;
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0.05em;
    }
  }
`;

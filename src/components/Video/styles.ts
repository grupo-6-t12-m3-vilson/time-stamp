import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  max-width: 1000px;
  white-space: nowrap;

  justify-content: space-between;

  gap: 25px;
  padding: 20px;

  margin-top: 50px;

  background-color: ${(props) => props.theme.video.backgroundColor};
  box-shadow: 1px 1px 15px 3px rgba(0, 0, 0, 0.11);
  border-radius: 10px;

  li {
    margin-left: 15px;
  }
`;

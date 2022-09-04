import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  height: 150px;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;

  video {
    border-radius: 5px;
  }
`;

export const InfosCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  font-family: "Nunito", sans-serif;
  gap: 10px;
  color: ${(props) => props.theme.bg_button};
  font-weight: 800;

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.bg_button};
  }

  span:nth-child(1) {
    font-size: 14px;
    font-weight: 700;
    color: #407bff;
  }

  span:nth-child(2) {
    font-size: 14px;
    font-weight: 700;
    color: #4a5f8e;
  }
`;

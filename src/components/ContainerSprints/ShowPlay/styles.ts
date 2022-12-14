import styled from "styled-components";

export const ContainerPlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: ${(props) => props.theme.containerSprints.color_video};
  border-radius: 8px;
  margin-right: 10px;

  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivPlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  padding: 0;
  color: ${(props) => props.theme.containerSprints.font_color_secondary};

  span {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    background: #123;
    padding: 10px;
    border-radius: 10px;
    color: white;
  }

  video {
    width: 100%;
    height: 90%;
    background-color: black;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 5px;
  }
`;

export const DivBox = styled.div`
  width: 37%;
  height: 90%;
  margin-right: 1%;
  margin-left: 1%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.containerSprints.colorDivBox};
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 10px;
    max-height: 375px;
  }
`;

export const DivExtra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 51px;
  background: ${(props) => props.theme.containerSprints.background_extra};
  border-radius: 10px 10px 0px 0px;

  h2 {
    font-family: "Nunito", sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #ffffff;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 240px;
  margin-top: 0.5rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: ${(props) => props.theme.containerSprints.scroll_bar};
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }

  @media (max-width: 1024px) {
    max-height: 200px;
  }
`;

export const MarksEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 240px;
  gap: 30px;

  p {
    font-family: "Nunito", sans-serif;
    font-size: 1.2rem;
    line-height: 28px;
    color: ${(props) => props.theme.containerSprints.color_empty_marks};
  }

  @media (max-width: 1024px) {
    max-height: 190px;
  }
`;

export const UlDetails = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    p {
      width: 30%;
      height: 2rem;
      font-family: "Nunito Sans", sans-serif;
      font-size: 1.25rem;
      font-weight: 800;
      text-align: center;
      color: ${(props) => props.theme.containerSprints.font_color_secondary};
      background: #bcc3d9;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      cursor: pointer;
    }

    span {
      width: 55%;
      height: 2rem;
      padding: 0 0.5rem;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: 800;
      color: ${(props) => props.theme.containerSprints.font_color_mark};
      background: #555d76;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
  }
`;

export const DivAddVideo = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;

  button {
    width: 50px;
    height: 50px;
    font-size: 25px;
    color: #0f2d51;
    background: ${(props) => props.theme.containerSprints.font_color_button};
    border-style: none;
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    bottom: 40px;
    margin-top: 30px;
  }
`;

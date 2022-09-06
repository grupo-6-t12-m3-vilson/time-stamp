import styled from "styled-components";

export const ContainerPlay = styled.div`
  display: flex;
  align-items: center;  
  justify-content: flex-end;
  width: 100%;
  background-color: ${(props) => props.theme.containerSprints.background};
  border-radius: 8px;

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
  background-color: ${(props) => props.theme.containerSprints.font_color_primary};

  video {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    border: 2.5px solid #fff;
  }
`;

export const DivBox = styled.div`
  width: 40%;
  height: 100%;
  margin-right: 1%;
  margin-left: 1%;
  background: ${(props) => props.theme.containerSprints.background_secondary};
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
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
    font-family: "Roboto Mono", monospace;
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 225px;
  margin-top: 0.5rem;
  overflow-y: auto;
  background-color: ${(props) => props.theme.containerSprints.background_secondary} ;
`;

export const UlDetails = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.containerSprints.background_secondary};
  
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: rgba(15, 45, 81, 0.5);
    border-radius: 10px;

    p {
      width: 30%;
      height: 2rem;
      font-family: "Nunito Sans", sans-serif;
      font-size: 1.25rem;
      font-weight: 800;
      text-align: center;
      color: ${(props) => props.theme.containerSprints.font_color_secondary};
      background: #BCC3D9;
      border-radius: 2px;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
  }
`;

export const DivAddVideo = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;

  button {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    font-size: 25px;
    color: #0f2d51;
    background: ${(props) => props.theme.containerSprints.font_color_button};
    border-style: none;
    border-radius: 50%;
  }
`;

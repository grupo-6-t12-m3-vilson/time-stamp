import styled from "styled-components";

export const SectionVideo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px;
  cursor: pointer;

  margin-left: 15px;

  video {
    width: 230px;
    height: 170px;
    border-radius: 5px;
  }

  section {
    margin-left: 15px;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.05em;
  }

  span {
    background: linear-gradient(to right, #407bff 20%, #4a5f8e 0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1440px) {
    margin-left: 40px;
  }

  @media (max-width: 1024px) {
    margin-left: 80px;
  }

  @media (max-width: 768px) {
    margin-left: 120px;

    video {
      width: 320px;
      height: 170px;
    }
  }

  @media (max-width: 425px) {
    display: flex;

    justify-content: space-around;
    flex-direction: column;
    height: 360px;

    margin-left: 15px;
    padding: 0;

    video {
      width: 280px;
      height: 170px;
    }
    section {
      margin-left: 0px;
    }
  }

  @media (max-width: 425px) {
    margin-left: 10px;
  }
`;

import styled from "styled-components";

export const ContainerPlay = styled.div`
  width: 100%;
  max-width: 1205px;
  height: 416px;
  border-radius: 8px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #d3e0f0;

  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivPlay = styled.div`
  width: calc(100% - 350px);
  height: calc(100% - 50px);
  font-size: 100px;
  background-color: #22282f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    height: 100%;
   
  }

  @media (max-width: 425px) {
    height: 250px;
    width: 310px;
    border: 10px solid #fff;
    border-radius: 10%;
  }
`;

export const DivBox = styled.div`
  width: 310px;
  height: 371px;
  margin-right: 1%;
  margin-left: 1%;
  background: rgba(255, 255, 255, 0.54);
  border-radius: 10px;

  @media (max-width: 425px) {
    max-height: 150px;
    max-width: 400px;
    margin-bottom: 1%;
  }
`;

export const DivExtra = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #0f2d51;
  border-radius: 10px 10px 0px 0px;

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.05em;

    color: #ffffff;
  }
`;

export const DivInfo = styled.div`
  height: 320px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const UlDetails = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    margin-top: 3px;
    width: 100%;
    gap: 19px;
    display: flex;
    justify-content: center;

    p {
      width: 30%;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 800;
      text-align: center;
      font-size: 22px;
      line-height: 30px;    
      /* identical to box height */

      cursor: pointer;
      letter-spacing: 0.05em;
      background: #bcc3d9;
      border-radius: 10px;

      color: rgba(35, 42, 67, 0.87);
    }

    span {
      width: 50%;
      background: #555d76;
      border-radius: 10px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 800;
      text-align: center;
      font-size: 22px;
      line-height: 30px;
      /* identical to box height */
      cursor: pointer;
      letter-spacing: 0.05em;
      color: rgba(35, 42, 67, 0.87);
      letter-spacing: 0.05em;

      color: rgba(255, 255, 255, 0.29);
    }
  }
`;

export const DivAddVideo = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-right: 15px;
  margin-bottom: 10px;

  button {
    height: 50px;
    width: 50px;
    font-size: 23px;
    border-style: none;
    background: #d3e0f0;
    border-radius: 50%;
    color: #0f2d51;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

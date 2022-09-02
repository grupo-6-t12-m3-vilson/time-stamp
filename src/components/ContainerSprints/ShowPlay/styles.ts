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
`;

export const DivBox = styled.div`
  width: 310px;
  height: 371px;
  margin-right: 1%;
  margin-left: 1%;
  background: rgba(255, 255, 255, 0.54);
  border-radius: 10px;
`;

export const DivExtra = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #0f2d51;
  border-radius: 10px 10px 0px 0px;

  p {
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

export const DivDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
  div{
    margin-top: 3px;
    width: 100%;
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
  
      letter-spacing: 0.05em;
      background: #BCC3D9;
      border-radius: 10px 0px 0px 10px;
  
      color: rgba(35, 42, 67, 0.87);
    }
  
    span {
      width: 50%;
      background: #555D76;
      border-radius: 10px;
      font-family: "Nunito";
      font-style: normal;
      font-weight: 800;
      text-align: center;
      font-size: 22px;
      line-height: 30px;
      /* identical to box height */
  
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

  button{
  height: 50px;
  width: 50px;    
  font-size: 23px;    
  border-style: none;
  background: #D3E0F0;
  border-radius: 50%;
  color: #0F2D51;
 }
`
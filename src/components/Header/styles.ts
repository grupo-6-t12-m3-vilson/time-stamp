import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;

  height: 100px;
  gap: 160px;

  background: ${(props) => props.theme.header.backgroundColor};
  box-shadow: ${(props) => props.theme.header.boxShadow};

  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 95px;
    letter-spacing: 0.05em;

    background: linear-gradient(
      to right,
      ${(props) => props.theme.header.linear1} 40%,
      ${(props) => props.theme.header.linear2} 0
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  section {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 855px) {
    gap: 25px;

    section {
      gap: 8px;
    }
  }

  @media (max-width: 715px) {
    h2 {
      display: none;
    }
  }

  @media (max-width: 422px) {
    gap: 10px;

    section {
      gap: 0px;
    }
  }
`;

export const Form = styled.form`
  input {
    background: #232a43;
    border-radius: 40px;
    border: none;

    padding: 10px;

    width: 200px;
    height: 30px;
  }

  @media (max-width: 396px) {
    input {
      width: 180px;
      height: 40px;
      padding: 5px;
    }
  }

  @media (max-width: 350px) {
    input {
      width: 130px;
    }
  }
`;

export const Search = styled.button`
  cursor: pointer;
  position: relative;
  right: 35px;
  top: 3px;
  background: none;
  border: none;

  @media (max-width: 368px) {
    position: relative;
    right: -185px;

    top: -32px;
  }

  @media (max-width: 320px) {
    right: 35px;
    top: 3px;
  }
`;

export const Profile = styled.div``;

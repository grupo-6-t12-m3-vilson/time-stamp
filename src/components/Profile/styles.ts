import styled from 'styled-components';

export const ContainerProfile = styled.div`
  font-family: 'Nunito', sans-serif;

  button {
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50%;
    background: ${(props) => props.theme.profile.button_background};
    border: 2px solid ${(props) => props.theme.profile.icon_color};
  }

  button > svg {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.profile.icon_color};
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 16px;
    right: 5px;
  }
`;

export const MenuProfile = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  right: 5px;
  top: 80px;
  width: 100px;
  height: 80px;
  box-sizing: border-box;
  border-radius: 5px;
  background: ${(props) => props.theme.profile.dropdown_background};

  p {
    color: ${(props) => props.theme.profile.font_color};
    font-weight: 600;
    cursor: pointer;
  }

  p:hover {
    color: #407bff;
  }

  p:first-child {
    padding-bottom: 2px;
    border-bottom: 2px solid #fff6;
  }

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
    position: absolute;
    top: -5px;
    left: 8px;
    background: ${(props) => props.theme.profile.dropdown_background};

    @media screen and (max-width: 1024px) {
      left: 75px;
    }
  }

  @media screen and (max-width: 1024px) {
    top: 55px;
    right: 4px;
  }
`;

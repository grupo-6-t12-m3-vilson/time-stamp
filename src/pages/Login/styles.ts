import styled from 'styled-components';

const SignInContainer = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  display: flex;
  height: 100vh;
  width: 100vw;
  color: ${(props) => props.theme.font_color_primary};
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.bg_linear_2},
    ${(props) => props.theme.bg_linear_1},
    ${(props) => props.theme.bg_linear_2}
  );
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

const ContentIntro = styled.section`
  display: flex;
  align-items: center;
  width: 80vw;
  height: 100vh;
  max-width: 1400px;
  justify-content: space-between;

  svg#freepik_stories-media-player:not(.animated) .animable {
    opacity: 0;
  }
  svg#freepik_stories-media-player.animated
    #freepik--background-simple--inject-69 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideDown,
      1.5s Infinite linear wind;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-media-player.animated #freepik--Shadow--inject-69 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn;
    animation-delay: 0s;
  }
  svg#freepik_stories-media-player.animated #freepik--Screen--inject-69 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp,
      1.5s Infinite linear wind;
    animation-delay: 0s, 1s;
  }
  svg#freepik_stories-media-player.animated #freepik--Character--inject-69 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn;
    animation-delay: 0s;
  }
  #elvw6kfx17y path {
    fill: ${(props) => props.theme.fill};
  }
  #freepik--path--inject-69 {
    fill: ${(props) => props.theme.fill};
  }
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes wind {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(2deg);
    }
    75% {
      transform: rotate(-3deg);
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: inherit;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100vw;
    justify-content: center;

    .intro {
      display: none;
    }
  }
`;

const FormContent = styled.div`
  width: 30%;
  min-width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0 0;
    background-color: ${(props) => props.theme.bg_input};
    height: 4rem;
    width: 100%;
    h2 {
      color: ${(props) => props.theme.font_color_second};
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 400px;
    div {
      background-color: transparent;
      h2 {
        width: 85%;
        color: ${(props) => props.theme.font_color_primary};
      }
    }
  }
`;

const FormSign = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bg_header_form};
  height: 18.5rem;
  max-height: 22.5rem;
  width: 100%;
  gap: 12px;
  border-radius: 0 0 5px 5px;

  button {
    display: 'flex';
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 48px;
    border-radius: 50px;
    background: ${(props) => props.theme.bg_input};
    color: ${(props) => props.theme.font_color_second};
    border: none;
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }

  input {
    background: ${(props) => props.theme.bg_input};
    border: none;
    height: 58px;
    width: 80%;
    border-radius: 10px;
    padding-left: 20px;
    outline: none;
    font-size: 16px;

    color: ${(props) => props.theme.font_color_second};

    &::placeholder {
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      opacity: 1;
      color: ${(props) => props.theme.color_place_holder};
      font-size: 1rem;
    }
  }

  div {
    background-color: transparent;
    position: relative;
    input {
      background: ${(props) => props.theme.bg_input};
      border: none;
      height: 58px;
      width: 80%;
      border-radius: 10px;
      padding-left: 20px;

      color: ${(props) => props.theme.font_color_second};

      &::placeholder {
        opacity: 1;
        color: ${(props) => props.theme.color_place_holder};
        font-size: 1rem;
      }
    }

    button {
      width: 40px;
      height: 40px;
      right: 30px;
      border-radius: 50%;
      position: absolute;
      background: transparent;
      cursor: pointer;
      touch-action: none;
    }
  }
  @media screen and (max-width: 1024px) {
    background-color: transparent;
  }
`;

const Error = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 0.8rem;
  color: #ff6961;
`;

export { SignInContainer, ContentIntro, FormContent, FormSign, Error };

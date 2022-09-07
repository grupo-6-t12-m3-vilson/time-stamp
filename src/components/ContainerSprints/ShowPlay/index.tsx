import { useContext, useEffect, useRef, useState } from "react";
import { BsFileEarmarkPlay } from "react-icons/bs";

import { UserContext } from "../../../contexts/UserContext";
import ModalAddVideo from "../../ModalAddvideo";

import {
  ContainerPlay,
  DivAddVideo,
  DivBox,
  DivExtra,
  DivInfo,
  DivPlay,
  UlDetails,
} from "./styles";

const ShowPlay = () => {
  const {
    toggleModalVisibility,
    modalEditVideoIsOpen,
    url,
    marcadores,
    videoRef,
    jumpShowTime,
    showTime,
    showTimeInSeconds,
  } = useContext(UserContext);

  useEffect(() => {
    showTimeInSeconds(marcadores);
  }, [marcadores]);

  return (
    <>
      <ContainerPlay>
        <DivPlay>
          <video src={url} controls ref={videoRef} />
        </DivPlay>
        <DivBox>
          <DivExtra>
            <h2>Extra</h2>
          </DivExtra>
          <DivInfo>
            <UlDetails>
              {showTime.map((marks, index) => (
                <li
                  onClick={() => jumpShowTime(marks.time_secunds)}
                  key={index}
                >
                  <p>{marks.time_video}</p>
                  <span>{marks.title}</span>
                </li>
              ))}
            </UlDetails>
          </DivInfo>
          <DivAddVideo>
            <button onClick={toggleModalVisibility}>
              <BsFileEarmarkPlay />
            </button>
          </DivAddVideo>
        </DivBox>
      </ContainerPlay>
      {modalEditVideoIsOpen && <ModalAddVideo />}
    </>
  );
};

export default ShowPlay;

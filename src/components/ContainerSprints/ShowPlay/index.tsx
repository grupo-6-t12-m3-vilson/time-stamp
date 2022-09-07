import { useContext, useRef, useState } from "react";
import { BsFileEarmarkPlay } from "react-icons/bs";
import { FiPlay, FiPause } from "react-icons/fi";

import { UserContext } from "../../../contexts/UserContext";
import ModalAddVideo from "../../ModalAddvideo";

import {
  ContainerPlay,
  DivAddVideo,
  DivBox,
  DivExtra,
  DivInfo,
  DivPlay,
  MarksEmpty,
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
    toggleVideoPlay,
  } = useContext(UserContext);

  return (
    <>
      <ContainerPlay>
        <DivPlay>
          <video src={url} controls ref={videoRef} onClick={toggleVideoPlay} />
        </DivPlay>
        <DivBox>
          <DivExtra>
            <h2>Extra</h2>
          </DivExtra>
          <DivInfo>
            {marcadores?.length !== 0 ? (
              <UlDetails>
                {marcadores.map((marks, index) => (
                  <li
                    onClick={() => jumpShowTime(marks.time_video)}
                    key={index}
                  >
                    <p>{marks.time_video}</p>
                    <span>{marks.title}</span>
                  </li>
                ))}
              </UlDetails>
            ) : (
              <MarksEmpty>
                <p>Olá!</p>
                <div>
                  <p>Seus marcadores</p>
                  <p>aparecerão aqui</p>
                </div>
              </MarksEmpty>
            )}
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

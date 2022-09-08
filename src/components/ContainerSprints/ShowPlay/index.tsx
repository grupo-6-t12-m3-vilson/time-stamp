import { useContext, useEffect, useRef, useState } from 'react';
import { BsFileEarmarkPlay } from 'react-icons/bs';

import { UserContext } from '../../../contexts/UserContext';
import ModalAddVideo from '../../ModalAddvideo';

import {
  ContainerPlay,
  DivAddVideo,
  DivBox,
  DivExtra,
  DivInfo,
  DivPlay,
  MarksEmpty,
  UlDetails,
} from './styles';

const ShowPlay = () => {
  const {
    toggleModalVisibility,
    modalEditVideoIsOpen,
    url,
    videoRef,
    jumpShowTime,
    toggleVideoPlay,
    markers,
  } = useContext(UserContext);

  return (
    <>
      <ContainerPlay>
        <DivPlay>
          <video src={url} controls ref={videoRef} onClick={toggleVideoPlay}>
            <track kind='captions' />
          </video>
        </DivPlay>
        <DivBox>
          <DivExtra>
            <h2>Marcador</h2>
          </DivExtra>
          <DivInfo>
            {markers?.length !== 0 ? (
              <UlDetails>
                {markers?.map((e) => (
                  <li
                    role='presentation'
                    onClick={() => {
                      jumpShowTime(e.time_video);
                    }}
                    key={e.id}
                  >
                    <p>{e.time_video}</p>
                    <span>{e.title}</span>
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
            <button type='button' onClick={toggleModalVisibility}>
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

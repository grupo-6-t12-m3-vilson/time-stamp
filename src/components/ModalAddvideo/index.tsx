import { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';
import { UserContext } from '../../contexts/UserContext';

import {
  CloseModalContainer,
  CreatedMarkersContainer,
  CreatedMarkersList,
  Input,
  MarkerFieldContainer,
  Modal,
  ModalContainer,
  SaveButton,
  UrlFieldContainer,
} from './styles';

const ModalAddVideo = () => {
  const {
    toggleModalVisibility,
    clearUrl,
    urlValue,
    setUrlValue,
    handleSubmit,
    onSubmit,
    register,
    markers,
    postVideos,
    day,
    setDay
  } = useContext(UserContext);

  return (
    <ModalContainer>
      <Modal>
        <CloseModalContainer>
          <h2>Faça suas alterações aqui</h2>
          <AiOutlineClose onClick={toggleModalVisibility} />
        </CloseModalContainer>
        <UrlFieldContainer>
          <AiOutlineCloseCircle size={25} onClick={clearUrl} />
          <input
            type='text'
            placeholder='URL :'
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
          />
        </UrlFieldContainer>
        <Input type="text" placeholder='Dia da semana' value={day} onChange={(e) => setDay(e.target.value)} />

        <MarkerFieldContainer onSubmit={handleSubmit(onSubmit)}>
          <textarea placeholder='Descrição:' {...register('title')} />
          <div>
            <input
              type='text'
              placeholder='tempo'
              {...register('time_video')}
            />
            <button type='submit'>Enviar</button>
          </div>
        </MarkerFieldContainer>

        <CreatedMarkersContainer>
          <CreatedMarkersList>
            {markers.map((mark) => (
              <li key={mark.id}>
                <span>{mark.time_video}</span>
                <p>{mark.title}</p>
              </li>
            ))}
          </CreatedMarkersList>
        </CreatedMarkersContainer>
        <SaveButton type='submit' onClick={postVideos}>
          Salvar
        </SaveButton>
      </Modal>
    </ModalContainer>
  );
};

export default ModalAddVideo;

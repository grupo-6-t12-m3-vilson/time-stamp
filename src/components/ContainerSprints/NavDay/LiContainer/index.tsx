import { useState, useEffect, ReactNode, useContext } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { ContainerLi, DivSelect, LiSelect } from './styles';

import { UserContext } from '../../../../contexts/UserContext';

import { IMarkers } from '../../../../contexts/UserContext/interface';

interface IData {
  day: string;
  url: string;
  marks: IMarkers;
}

interface Children {
  children: ReactNode;
  data: IData;
}

interface Props {
  props: string;
  theme: {
    containerSprints: {
      font_color_primary: string;
    };
  };
}

const LiContainer = ({ children, data }: Children) => {
  const [showSelect, setShowSelect] = useState(false);

  const { setUrl, setMarkers, setUrlValue } = useContext(UserContext);

  useEffect(() => {
    if (showSelect) {
      const select = document.querySelector('.selectVideo');
      select?.classList.add('video-Open');
    }
  }, [showSelect]);

  const handleShowSelect = () => {
    if (showSelect) {
      const select = document.querySelector('.selectVideo');
      select?.classList.add('select-Open');
      select?.classList.add('select-Close');

      setTimeout(() => setShowSelect(!showSelect), 600);
    } else {
      setShowSelect(!showSelect);
    }
  };
  const handleDayVerification = (Day: ReactNode) => ({
    color:
      Day === 'Extra'
        ? '#407bff'
        : `${(props: Props) =>
            props.theme.containerSprints.font_color_primary}`,
  });

  const handleSelectVideo = () => {
    setUrl(data.url);
    const { marks } = data;
    setMarkers(marks as any);
    setUrlValue(data.url);
  };
  return (
    <>
      <ContainerLi className='selectVideo'>
        {showSelect ? (
          <>
            <FaChevronDown onClick={handleShowSelect} />
            <p
              role='presentation'
              style={handleDayVerification(children)}
              onClick={handleShowSelect}
            >
              {children}
            </p>
          </>
        ) : (
          <>
            <FaChevronRight onClick={handleShowSelect} />
            <p
              role='presentation'
              style={handleDayVerification(children)}
              onClick={handleShowSelect}
            >
              {children}
            </p>
          </>
        )}
      </ContainerLi>
      {showSelect && (
        <DivSelect>
          <LiSelect onClick={() => handleSelectVideo()}>
            Demo {data.day}
          </LiSelect>
        </DivSelect>
      )}
    </>
  );
};

export default LiContainer;

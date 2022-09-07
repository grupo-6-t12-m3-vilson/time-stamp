import { createContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import schemaMarkers from '../../utils/schema';
import {
  IMarkers,
  IShowTime,
  IShowTimeInSeconds,
  IUserContext,
  IUserProviderProps,
} from './interface';
import { api } from '../../services/api';

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(true);
  const themeDark = () => {
    setTheme(!theme);
  };

  const Navigate = useNavigate();

  const [card, setCard] = useState([
    { module: 'M3', dia: '05/07/22', sprint: 1 },
    { module: 'M3', dia: '12/07/22', sprint: 2 },
    { module: 'M3', dia: '21/07/22', sprint: 3 },
    { module: 'M3', dia: '28/07/22', sprint: 4 },
    { module: 'M3', dia: '05/08/22', sprint: 5 },
    { module: 'M3', dia: '12/08/22', sprint: 6 },
    { module: 'M3', dia: '19/08/22', sprint: 7 },
    { module: 'M3', dia: '28/08/22', sprint: 8 },
  ]);

  const logout = () => {
    localStorage.clear();
    setDropDown(false);
    Navigate('/', { replace: true });
    toast.success('Vamos sentir saudades, até uma próxima =)', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  const [modalEditVideoIsOpen, setModalEditVideoIsOpen] =
    useState<boolean>(false);

  const [markers, setMarkers] = useState<IMarkers[]>([]);
  const [urlValue, setUrlValue] = useState<string>('');
  const [marcadores, setMarcadores] = useState<IMarkers[]>([]);
  const [url, setUrl] = useState<string>('');
  const [playing, setPlaying] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMarkers>({ resolver: yupResolver(schemaMarkers) });

  const clearUrl = () => {
    setUrlValue('');
  };

  const toggleModalVisibility = () => {
    setModalEditVideoIsOpen(!modalEditVideoIsOpen);
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlay = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playing) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [playing]);

  const showTimeInSeconds = (timeSecond: string) => {
    const partes: string[] = timeSecond.toString().split(':');

    if (partes.length < 3) {
      const result = {
        time_secunds: parseInt(partes[0], 10) * 60 + parseInt(partes[1], 10),
      };
      return result;
    }

    const result = {
      time_secunds:
        parseInt(partes[0], 10) * 3600 +
        parseInt(partes[1], 10) * 60 +
        parseInt(partes[2], 10),
    };
    return result;
  };

  const jumpShowTime = (timeSecund: string) => {
    const result = showTimeInSeconds(timeSecund);

    console.log(result);
    if (videoRef !== null && videoRef.current) {
      videoRef.current.currentTime = result.time_secunds;
    }
  };

  const onSubmit = (data: IMarkers) => {
    setMarkers([...markers, data]);
  };

  const exemplo = {
    url: urlValue,
    marks: markers,
    userId: 3,
  };

  const [showTime, setShowTime] = useState<IShowTime[]>([]);

  const postVideos = () => {
    toggleModalVisibility();
    api
      .post('/videos', exemplo, {})
      .then((res) => {
        console.log(res);
        setMarcadores(res.data.marks);
        setUrl(res.data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{
        card,
        theme,
        themeDark,
        clearUrl,
        toggleModalVisibility,
        urlValue,
        setUrlValue,
        modalEditVideoIsOpen,
        videoRef,
        jumpShowTime,
        markers,
        setMarkers,
        onSubmit,
        register,
        handleSubmit,
        errors,
        exemplo,
        postVideos,
        marcadores,
        url,
        dropDown,
        setDropDown,
        showTime,
        logout,
        toggleVideoPlay,
        setUrl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

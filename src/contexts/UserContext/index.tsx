import { createContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import schemaMarkers from '../../utils/schema';
import {
  IMarkers,
  IShowTime,
  IShowTimeInSeconds,
  IUserContext,
  IUserProviderProps,
} from './interface';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

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
    setDropDown(false)
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
    playing ? videoRef.current?.play() : videoRef.current?.pause();
  }, [playing]);

  const jumpShowTime = (time_secunds: number) => {
    console.log(time_secunds);
    if (videoRef !== null && videoRef.current) {
      videoRef.current.currentTime = time_secunds;
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

  const showTimeInSeconds = (marks: IShowTimeInSeconds[]) => {
    marks.map((mark: IShowTimeInSeconds) => {
      const partes: string[] = mark.time_video.toString().split(':');

      if (partes.length < 3) {
        const result = {
          time_secunds: parseInt(partes[0]) * 60 + parseInt(partes[1]),
          time_video: mark.time_video,
          title: mark.title,
        };

        return setShowTime((prevShowTime) => [...prevShowTime, result]);
      }

      const result = {
        time_secunds:
          parseInt(partes[0]) * 3600 +
          parseInt(partes[1]) * 60 +
          parseInt(partes[2]),
        time_video: mark.time_video,
        title: mark.title,
      };
      return setShowTime((prevShowTime) => [...prevShowTime, result]);
    });
  };

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
        showTimeInSeconds,
        logout,
        toggleVideoPlay,
        setUrl
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

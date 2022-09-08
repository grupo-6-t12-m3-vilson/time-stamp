import { createContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
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
  const [theme, setTheme] = useState<boolean>(false);
  const themeDark = () => {
    setTheme(!theme);
  };

  const Navigate = useNavigate();

  const token = localStorage.getItem('@time-stamp:token');
  const user = JSON.parse(localStorage.getItem('@time-stamp:user') as any);

  const data = new Date();

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
  const [day, setDay] = useState<string>('');
  const [playing, setPlaying] = useState<boolean>(false);
  const [searchedVideosList, setSearchedVideosList] = useState([]);

  const [videos, setVideos] = useState([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterVideos, setFilterVideos] = useState([]);
  const [sprint, setSprint] = useState<string>('');

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    api
      .get(`/videos?moduleId=${user?.module}`)
      .then((res) => {
        setVideos(res.data);
      })
      .then((err) => {});
  };

  useEffect(() => {
    if (searchInput !== '') {
      const filteredVideos = videos.filter(
        (video: any) =>
          video.name
            .toLowerCase()
            .trim()
            .includes(searchInput.toLowerCase().trim()) ||
          video.day
            .toLowerCase()
            .trim()
            .includes(searchInput.toLowerCase().trim())
      );

      setSearchedVideosList(filteredVideos);
    } else {
      setSearchedVideosList(videos);
    }
  }, [searchInput]);

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

    if (videoRef !== null && videoRef.current) {
      videoRef.current.currentTime = result.time_secunds;
    }
  };

  const onSubmit = (data: IMarkers) => {
    setMarkers([...markers, data]);
  };

  const exemplo = {
    url: urlValue,
    sprintId: sprint,
    day: day,
    moduleId: user?.module,
    userId: user?.id,
    created_at: data.toLocaleDateString(),
    update_at: data.toLocaleDateString(),
    marks: markers,
  };

  const [showTime, setShowTime] = useState<IShowTime[]>([]);

  const postVideos = () => {
    toggleModalVisibility();
    api
      .post('/videos', exemplo, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        setMarcadores(res.data.marks);
        setUrl(res.data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{
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
        videos,
        filterVideos,
        day,
        setDay,
        sprint,
        setSprint,
        searchInput,
        setSearchInput,
        searchedVideosList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

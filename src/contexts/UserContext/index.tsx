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
  const [theme, setTheme] = useState<boolean>(true);
  const themeDark = () => {
    setTheme(!theme);
  };
  
  const Navigate = useNavigate();

  const token = localStorage.getItem('@time-stamp:token')
  const user = JSON.parse(localStorage.getItem('@time-stamp:user') as any)

  const data = new Date()

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
  
 const [videos, setVideos] = useState([])
 const [searchInput, setSearchInput] = useState("");
 const [filterVideos, setFilterVideos] = useState([])

 useEffect(() => {
  getVideos()
}, [])

const getVideos = () => {
  api.get(`/videos?moduleId=${user.module}`).then((res) => {
    setVideos(res.data)
  })
  .then((err) => console.log(err))
}

 function filterInput(searchValue: string) {
  setSearchInput(searchValue)
  if (searchInput === "") {
    setFilterVideos(videos);
  } else {
    const itensFiltrados = videos.filter((video) => {
      return Object.values(video)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilterVideos(itensFiltrados);
  }
}

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

  const { sprintId } = useParams();

  console.log(sprintId)

  const exemplo = {
    url: urlValue,
    sprintId: sprintId,
    day: "Quinta-feira",
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
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        }, 
      })
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
        filterInput,
        videos,
        filterVideos,
        day,
        setDay,
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import { Dispatch, ReactNode, SetStateAction, RefObject } from 'react';
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrorsImpl,
} from 'react-hook-form';

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IMarkers {
  id: string;
  time_video: string;
  title: string;
}

export interface IShowTimeInSeconds {
  time_video: number;
  title: string;
}

export interface IShowTime extends IShowTimeInSeconds {
  time_secunds: number;
}

export interface FilterVideos {
  created_at: string
  day: string
  extra: boolean
  id: number
  marks: IMarkers[]
  moduleId: number
  name: string
  sprintId: number
  update_at: string
  url: string
  userId: number
}

export interface IUserContext {
  theme: boolean;
  themeDark: () => void;
  clearUrl: () => void;
  toggleModalVisibility: () => void;
  urlValue: string;
  setUrlValue: (value: string) => void;
  modalEditVideoIsOpen: boolean;
  markers: IMarkers[];
  setMarkers: Dispatch<SetStateAction<IMarkers[]>>;
  onSubmit: (data: IMarkers) => void;
  register: UseFormRegister<IMarkers>;
  handleSubmit: UseFormHandleSubmit<IMarkers>;
  errors: FieldErrorsImpl<IMarkers>;
  exemplo: {
    url: string;
    marks: IMarkers[];
    userId: number;
    moduleId: number | null
    created_at: string
    update_at: string
  };
  postVideos: () => void;
  marcadores: IMarkers[];
  url: string;
  dropDown: boolean;
  setDropDown: (value: boolean) => void;
  videoRef: RefObject<HTMLVideoElement>;
  jumpShowTime: (time: string) => void;
  showTime: IShowTime[];
  logout: () => void;
  toggleVideoPlay: () => void;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  filterInput: (searchValue: string) => void
  videos: FilterVideos[]
  filterVideos: FilterVideos[]
}

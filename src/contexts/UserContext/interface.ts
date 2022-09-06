import { Dispatch, ReactNode, SetStateAction } from "react";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrorsImpl,
} from "react-hook-form";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface ICard {
  module: string;
  dia: string;
  sprint: number;
}

export interface IMarkers {
  time_video: number;
  title: string;
}

export interface IMarcadores {
  url: string;
  marks: IMarkers[];
  userId: number;
}

export interface IUserContext {
  card: ICard[];
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
  };
}

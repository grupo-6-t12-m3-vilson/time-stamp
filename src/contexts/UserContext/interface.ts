import { ReactNode, RefObject } from "react";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface ICard {
  module: string;
  dia: string;
  sprint: number;
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
  videoRef: RefObject<HTMLVideoElement>;
  showTime: IShowTime[];
  jumpShowTime: (time:number) => void;
}

export interface IShowTime {
  timeSecunds: number;
  time: string;
  description: string;
}

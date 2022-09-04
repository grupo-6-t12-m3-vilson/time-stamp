import { ReactNode } from "react";

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
}

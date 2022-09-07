import { ReactNode } from 'react';
import { UserLoginProps } from '../../services/userLogin';

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthProviderData {
  loginSubmit: (data: UserLoginProps) => void;
}

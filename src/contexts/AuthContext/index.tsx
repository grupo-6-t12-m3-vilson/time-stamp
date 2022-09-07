import React, { createContext, ReactNode, useEffect } from 'react';
import { toast } from 'react-toastify';
import { userLogin, UserLoginProps } from '../../services/userLogin';
import { useNavigate } from 'react-router-dom';
import { AuthProviderData, AuthProviderProps } from './interface';

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const Navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@time-stamp:token');
    const userId = localStorage.getItem('@time-stamp:userId');
    const userName = localStorage.getItem('@time-stamp:userName');

    if (token && userId) {
      toast.success(`Login realizado com sucesso! Seja bem vindo ${userName}`, {
        draggable: true,
        draggablePercent: 60,
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      Navigate('/dashboard', { replace: true });
    }
  }, []);

  const loginSubmit = async (data: UserLoginProps) => {
    try {
      const { accessToken, user } = await userLogin(data);
      if (accessToken) {
        localStorage.setItem('@time-stamp:token', accessToken);
        localStorage.setItem('@time-stamp:userId', '' + user.id);
        localStorage.setItem('@time-stamp:userEmail', user.email);
        localStorage.setItem('@time-stamp:userModule', '' + user.module);
        localStorage.setItem('@time-stamp:userName', user.name);

        toast.success(
          `Login realizado com sucesso! Seja bem vindo ${localStorage.getItem(
            '@time-stamp:userName'
          )}`,
          {
            draggable: true,
            draggablePercent: 60,
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1000,
          }
        );
        Navigate('/dashboard', { replace: true });
      }
    } catch (error) {
      toast.error(
        'Não foi possível realizar o login! dados informados incorretos',
        {
          draggable: true,
          draggablePercent: 60,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        }
      );
    }
  };

  return (
    <AuthContext.Provider value={{ loginSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

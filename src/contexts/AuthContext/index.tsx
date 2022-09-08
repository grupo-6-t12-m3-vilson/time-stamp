import { useNavigate } from 'react-router-dom';
import { createContext, ReactNode, useEffect } from 'react';
import { toast } from 'react-toastify';
import { userLogin, UserLoginProps } from '../../services/userLogin';
import { AuthProviderData, AuthProviderProps } from './interface';

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const Navigate = useNavigate();

  const loginSubmit = async (data: UserLoginProps) => {
    try {
      const { accessToken, user } = await userLogin(data);
      if (accessToken) {
        localStorage.setItem('@time-stamp:token', accessToken);
        localStorage.setItem('@time-stamp:user', JSON.stringify(user));
    

        toast.success(
          `Login realizado com sucesso! Seja bem vindo ${user.name}`,
          {
            draggable: true,
            draggablePercent: 60,
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
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

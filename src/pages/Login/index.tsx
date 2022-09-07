import { useContext, useState } from 'react';

import {
  ContentIntro,
  FormContent,
  FormSign,
  SignInContainer,
  Error,
} from './styles';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import HeaderComponent from '../../components/HeaderComponent';
import { UserLoginProps } from '../../services/userLogin';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../../contexts/AuthContext';
import { loginFormSchema } from '../../utils/schema';

import { ReactComponent as Intro } from '../../assets/intro.svg';

const Login = () => {
  const { loginSubmit } = useContext(AuthContext);

  const [typePassword, setTypePassword] = useState('password');

  const showPassword = () => {
    typePassword === 'password'
      ? setTypePassword('text')
      : setTypePassword('password');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginProps>({
    resolver: yupResolver(loginFormSchema),
  });

  return (
    <SignInContainer>
      <HeaderComponent />
      <ContentIntro>
        <FormContent>
          <div>
            <h2>Seja, bem vindo(a)!</h2>
          </div>
          <FormSign onSubmit={handleSubmit(loginSubmit)}>
            <input
              type='email'
              placeholder='email'
              autoFocus
              {...register('email')}
            />
            <Error>{errors.email?.message} </Error>
            <div>
              <input
                type={typePassword}
                placeholder='password'
                {...register('password')}
              />
              <button type='button' onClick={showPassword}>
                {typePassword === 'password' ? (
                  <FiEye width={40} color='#fff' />
                ) : (
                  <FiEyeOff width={40} color='#fff' />
                )}
              </button>
            </div>
            <Error>{errors.password?.message} </Error>
            <button type='submit'>Login</button>
          </FormSign>
        </FormContent>
        <Intro width='50%' />
      </ContentIntro>
    </SignInContainer>
  );
};

export default Login;

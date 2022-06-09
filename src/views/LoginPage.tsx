/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useUser } from '../compositions/useUser';
import { UserData } from '../interfaces/User';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo_mitSlogan.png';
import styled from 'styled-components';

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

declare let google: any;

const LoginPage: React.FC<Props> = ({ setIsAuth }) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [user, setUser] = useState({});
  const { isAuthenticated, setUserData } = useUser();
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsAuth(true);
    forwardToHome();
  };

  function forwardToHome() {
    navigate('/home');
  }

  useEffect(() => {
    setTimeout(() => {
      google.accounts.id.initialize({
        client_id: '342177780853-gdkkelj48qakufdd0okftp2rfv2nk8jd.apps.googleusercontent.com',
        callback: handleCallbackResponse,
      });
      google.accounts.id.renderButton(document.getElementById('signInDiv'), {
        theme: 'outline',
        size: 'large',
      });
    }, 300);
  }, []);

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    // The JWT token we recieve from Google is encoded. For better reading, we need to decode it:
    const userData: UserData = jwt_decode(response.credential);
    setUserData(userData);
    setUser(userData);
    handleLogin();
  }

  return (
    <Container className='Login'>
      <StyledImage src={Logo}/>
      <StyledButton id='signInDiv' />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  text-align:center;
  flex-direction: column;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

const StyledImage = styled.img`
  margin: 0 auto;
  padding: 50px;
  width: 350px;
`

const StyledButton = styled.button`
  margin: 100px 50px;
  padding: 0;
  border-radius: 18px;
  overflow:hidden;
`

/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { UserData } from '../../interfaces/User';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../../compositions/useUser';

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

declare let google: any;

const Login: React.FC<Props> = ({ setIsAuth }) => {
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
    <Container>
      <StyledButton id='signInDiv' />
    </Container>
  );
};

export default Login;

const Container = styled.div``;

const StyledButton = styled.button`
  margin: 50px 50px 250px;
  padding: 0;
  border-radius: 18px;
  overflow: hidden;
`;

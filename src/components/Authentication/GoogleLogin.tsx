/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components';
import { UserData } from '../../interfaces/interUser';
import { useUser } from '../../compositions/useUser';

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

declare let google: any;

const GoogleLogin: React.FC<Props> = ({ setIsAuth }) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { setUserData } = useUser();
  const navigate = useNavigate();

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
    // The JWT token we recieve from Google is encoded. For better reading, we need to decode it:
    const userData: UserData = jwt_decode(response.credential);
    setUserData(userData);
    handleLogin();
  }

  function handleLogin() {
    setIsAuth(true);
    navigate('/home');
  }

  return (
    <Container>
      <p>Welcome to the Login Page Of Weekz</p>
      <StyledButton id='signInDiv' />
    </Container>
  );
};

export default GoogleLogin;

const Container = styled.div`
  width: 30rem;
  height: 20rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;
  vertical-align: text-bottom;
  text-align: center;
  background-color: red;
  font-family: Inter, sans-serif;
  color: hsla(0, 0%, 100%, 0.71);
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
`;

const StyledButton = styled.button`
  margin: 50px 50px 250px;
  padding: 0;
  border-radius: 18px;
  overflow: hidden;
`;

// const StyledButton = styled.button`
//   --ntp-realbox-border-radius: calc(0.5 * var(--ntp-realbox-height));
//   --ntp-realbox-height: 35px;
//   --ntp-realbox-shadow: 10 0px 0px 0 rgba(00, 00, 00, 0);
//   border-radius: var(--ntp-realbox-border-radius);
//   border-color: #df9d76;
//   box-shadow: var(--ntp-realbox-shadow);
//   font-size: 16px;
//   height: 80px;
//   background-color: #fff;
//   font-color: white;
//   color: #df9d76;
//   font-family: inherit;

//   margin: 50px 50px 250px;
//   overflow: hidden;
// `;

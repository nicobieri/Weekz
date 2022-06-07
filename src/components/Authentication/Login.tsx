/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useUser } from '../../compositions/useUser';
import { UserData } from '../../interfaces/User';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const { isAuthenticated, setUserData, getUserName, getUserImage } = useUser();

declare let google: any;

export default function Login() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [user, setUser] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    console.log('ist eingeloggt: ', isAuthenticated());
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
    console.log(userData);
    setUserData(userData);
    setUser(userData);
    //console.log('Userdaten wurden gesetzt');
    //console.log('User: ', getUserName(), 'ist eingeloggt: ', isAuthenticated());
  }

  return (
    <div className='Login'>
      <div id='signInDiv'></div>
      {isAuthenticated() && (
        <>
          <div>
            <h1>Logged in: {getUserName()}</h1>
          </div>
          <div>
            <StyledImage src={getUserImage()}></StyledImage>
          </div>
        </>
      )}
    </div>
  );
}

const StyledImage = styled.img`
  border-radius: 50%;
`;

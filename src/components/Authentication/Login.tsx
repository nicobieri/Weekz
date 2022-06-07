/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useUser } from '../../compositions/useUser';
import { UserData } from '../../interfaces/User';
import styled from 'styled-components';

const { isAuthenticated, setUserData, getUserName, getUserImage } = useUser();

declare let google: any;
let userData: UserData;

function Login() {
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
    userData = jwt_decode(response.credential);
    console.log('ist eingeloggt:  ', isAuthenticated());
    console.log('versuche Username auszulesen: ', getUserName());
    console.log('versuche Bild auszulesen: ', getUserImage());
    setUserData(userData);
    console.log('Userdaten wurden gesetzt');
    console.log('ist eingeloggt: ', isAuthenticated());
    console.log('versuche Username auszulesen: ', getUserName());
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

export default Login;

const StyledImage = styled.img`
  border-radius: 50%;
`;

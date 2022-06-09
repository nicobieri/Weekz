/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useUser } from '../compositions/useUser';
import { UserData } from '../interfaces/User';
import { useNavigate } from 'react-router-dom';

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
    handleLogin();
    //console.log('Userdaten wurden gesetzt');
    //console.log('User: ', getUserName(), 'ist eingeloggt: ', isAuthenticated());
  }

  return (
    <div className='Login'>
      <div id='signInDiv'></div>
    </div>
  );
};

export default LoginPage;

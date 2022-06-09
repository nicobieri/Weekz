import React from 'react';
import Logo from '../assets/Logo_transparent.png';
import styled from 'styled-components';
import GoogleLogin from '../components/Authentication/GoogleLogin';

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<Props> = ({ setIsAuth }) => {
  return (
    <Container>
      <StyledImage src={Logo} />
      <GoogleLogin setIsAuth={setIsAuth} />
      <StyledFooter>A school project by Nico Bieri and Alexandra Nicole</StyledFooter>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  text-align: center;
  flex-direction: column;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(0deg, rgba(145, 174, 182, 1) 0%, rgba(61, 60, 71, 1) 80%);
`;

const StyledImage = styled.img`
  margin: 0 auto;
  padding: 80px;
  width: 300px;
`;

const StyledFooter = styled.div`
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 auto;

  @media (max-height: 500px) {
    display: none;
  }
`;

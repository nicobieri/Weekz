import logo from '../assets/Logo_mitSlogan.png';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function App() {
  return (
    <Container>
      <Image src={logo} className='App-logo' alt='logo' />
      <NavigationContainer>
        <p>
          <StyledLink to={'/login'}>Login</StyledLink>
        </p>
        <p>
          <StyledLink to={'/home'}>Home</StyledLink>
        </p>
      </NavigationContainer>
      <StyledOutlet />
      <h2>Time now: {new Date().toISOString()}</h2>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const NavigationContainer = styled.div``;

const StyledLink = styled(Link)`
  color: #61dafb;
`;

const StyledOutlet = styled(Outlet)``;

const Image = styled.img`
  height: 10vmin;
  border-right-width: 100px;
`;

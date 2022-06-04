import logo from '../assets/Logo_mitSlogan.png';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const LinkButton = styled(Link)`
  color: #61dafb;
`;

const Image = styled.img`
  height: 10vmin;
  border-right-width: 100px;
`;

export default function App() {
  return (
    <Container>
      <Image src={logo} className='App-logo' alt='logo' />
      <div>
        <p>
          <LinkButton to={'/login'}>Login</LinkButton>
        </p>
        <p>
          <LinkButton to={'/home'}>Home</LinkButton>
        </p>
      </div>
      <Outlet />
      <h2>Time now: {new Date().toISOString()}</h2>
    </Container>
  );
}

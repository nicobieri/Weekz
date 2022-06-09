import styled from 'styled-components';
import Logout from '../components/Authentication/Logout';
import { TodoInput } from '../components/TodoInput/TodoInput';
import { useUser } from '../compositions/useUser';

const HomePage = () => {
  const { getUserName, getUserImage } = useUser();
  return (
    <Container>
      <h1>Home</h1>
      <h2>Hallo {getUserName()}</h2>
      <StyledImage src={getUserImage()}></StyledImage>
      <TodoInput />
      <Logout />
    </Container>
  );
};

export default HomePage;

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
  border-radius: 50%;
  padding: 50px;
`;

import styled from 'styled-components';
import Logout from '../components/Authentication/Logout';
import { Planer } from '../components/Planer/Planer';
import { useUser } from '../compositions/useUser';

const HomePage = () => {
  const { getUserName, getUserImage } = useUser();
  return (
    <Container>
      <Styledh2>Hallo {getUserName()}</Styledh2>
      <StyledImage src={getUserImage()}></StyledImage>
      <StyledLogout>
        <Logout />
      </StyledLogout>
      <StyledPlaner>
        <Planer />
      </StyledPlaner>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  background: transparent;
  box-sizing: border-box;
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
  font-family: inherit;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  padding: 20px;
  float: left;
  font-family: inherit;
`;
const StyledLogout = styled.div`
  float: left;
  padding: 5px;
  font-family: inherit;
`;

const Styledh2 = styled.h2`
  color: #df9d76;
  font-family: inherit;
`;

const StyledPlaner = styled.div`
  float: left;
  padding: 5% 30%;
  width: 40%;
  box-sizing: border-box;
  margin-right: 92%;
`;

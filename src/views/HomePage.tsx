import styled from 'styled-components';
import Logout from '../components/Authentication/Logout';
import { Planer } from '../components/Planer/Planer';
import { useUser } from '../compositions/useUser';

const HomePage = () => {
  const { getUserName, getUserImage } = useUser();
  return (
      <Container>
        <HeaderContainer>
         <Styledh2>Hallo {getUserName()}</Styledh2>
        <StyledImage src={getUserImage()}></StyledImage>
        <StyledLogout>
        <Logout />
        </StyledLogout>
        </HeaderContainer>
        <StyledPlaner>
        <Planer />
      </StyledPlaner>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
height: 100vh;

`;
const HeaderContainer = styled.div`
    display: flex;
  flex-direction: column;
  display: -ms-flexbox;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 30%;
  
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

`;

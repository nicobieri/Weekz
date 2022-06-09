/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../../compositions/useUser';

const Logout = () => {
  const { removeUserData } = useUser();
  const navigate = useNavigate();

  function handleSignOut(event) {
    navigate('/login');
    removeUserData();
  }

  return (
    <Container>
      <StyledButton onClick={(e) => handleSignOut(e)}>Logout</StyledButton>
    </Container>
  );
};

export default Logout;

const Container = styled.div``;

const StyledButton = styled.button`
  padding: 12px 20px;
  border-radius: 18px;
  overflow: hidden;
  background-color: #ffffff;
`;

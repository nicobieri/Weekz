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
  --ntp-realbox-border-radius: calc(0.5 * var(--ntp-realbox-height));
  --ntp-realbox-height: 35px;
  --ntp-realbox-shadow: 10 0px 0px 0 rgba(00, 00, 00, 0);
  border-radius: var(--ntp-realbox-border-radius);
  border-color: #df9d76;
  box-shadow: var(--ntp-realbox-shadow);
  font-size: 16px;
  height: var(--ntp-realbox-height);
  background-color: transparent;
  font-color: white;
  color: #df9d76;
  font-family: inherit;
`;
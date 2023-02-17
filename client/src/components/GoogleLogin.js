import styled from 'styled-components';
import { ReactComponent as GoogleIcon } from 'assets/googleLogo.svg';

const GoogleLogin = () => {
  return (
    <GoogleLoginButton>
      <GoogleIcon width={20} height={20} />
      <span>Login with Google</span>
    </GoogleLoginButton>
  );
};

const GoogleLoginButton = styled.button`
  width: 80%;
  height: 2.5rem;
  border-radius: 0.4rem;
  background-color: #f8f9f9;
  border-color: #d5d9dc;
  display: inline-block;
  padding: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    padding: 0.3rem;
  }
`;

export default GoogleLogin;

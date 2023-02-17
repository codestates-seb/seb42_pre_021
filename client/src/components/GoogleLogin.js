import styled from 'styled-components';
import { ReactComponent as GoogleIcon } from 'assets/googleLogo.svg';

const HandleClickGoogleLoginButton = () => {};

const GoogleLogin = () => {
  return (
    <GoogleLoginButton onClick={HandleClickGoogleLoginButton}>
      <GoogleIcon width={20} height={20} />
      <span>Login with Google</span>
    </GoogleLoginButton>
  );
};

const GoogleLoginButton = styled.button`
  width: 20rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  background-color: #f8f9f9;
  display: inline-block;
  padding: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border: 1px solid #d5d9dc;
  margin: 1.5rem 0 0.5rem;
  cursor: pointer;
  > span {
    padding: 0.3rem;
  }
  &:hover {
    background-color: hsl(210, 8%, 85%);
    border: 1px solid hsl(210, 8%, 75%);
  }
`;

export default GoogleLogin;

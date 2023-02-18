import styled from 'styled-components';
import { ReactComponent as GoogleIcon } from 'assets/googleLogo.svg';

// const HandleClickGoogleButton = () => {};

const GoogleSignUp = () => {
  return (
    <GoogleLoginBtn>
      <GoogleIcon width={20} height={20} />
      <span>Sign up with Google</span>
    </GoogleLoginBtn>
  );
};

const GoogleLoginBtn = styled.button`
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
    background-color: #d6d9dc;
    border: 1px solid #babfc4;
  }
`;

export default GoogleSignUp;

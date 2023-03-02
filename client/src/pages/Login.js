import styled from 'styled-components';
import { GoogleLogin, GithubLogin, LoginInputForm } from 'components/Login';
import { Link } from 'react-router-dom';
import { ReactComponent as StackOverFlowLogo } from 'assets/stackoverflow.svg';

const Login = () => {
  return (
    <Wrapper>
      <LoginContainer>
        <StackOverFlowLogo />
        <GoogleLogin />
        <GithubLogin />
        <LoginInputForm />
        <SignUpTextContainer>
          Don’t have an account? <SignupLink to="/signup"> Sign up</SignupLink>
        </SignUpTextContainer>
      </LoginContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 3rem);
  display: flex;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
`;

const SignUpTextContainer = styled.div`
  margin-top: 2.5rem;
  font-size: 0.9rem;
  text-align: center;
  width: 20rem;
`;

const SignupLink = styled(Link)`
  color: #3b95ff;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #80bbff;
  }
`;
export default Login;

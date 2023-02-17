import styled from 'styled-components';
import GoogleLogin from 'components/GoogleLogin';
import GithubLogin from 'components/GithubLogin';
import LoginInputForm from 'components/LoginInputForm';
import { Link } from 'react-router-dom';
import { ReactComponent as StackOverFlowLogo } from 'assets/stackoverflow.svg';

const Login = () => {
  return (
    <Wrapper>
      {/*Navigation 위치예정*/}
      <LoginContainer>
        <StackOverFlowLogo width={40} height={40} />
        <GoogleLogin />
        <GithubLogin />
        <LoginInputForm />
        <SignUpTextContainer>
          Don’t have an account? <SignupLink to="/signup"> Sign up</SignupLink>
        </SignUpTextContainer>
      </LoginContainer>
      <SideArea />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
const SideArea = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  align-items: center;
  background-color: white;
`;

const SignUpTextContainer = styled.div`
  margin-top: 2.5rem;
  font-size: 0.9rem;
  text-align: center;
  width: 20rem;
`;

export const SignupLink = styled(Link)`
  color: #3b95ff;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #80bbff;
  }
`;
export default Login;

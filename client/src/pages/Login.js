import styled from 'styled-components';
import GoogleLogin from 'components/GoogleLogin';
import GithubLogin from 'components/GithubLogin';
import { ReactComponent as StackOverFlowLogo } from 'assets/stackoverflow.svg';

const Login = () => {
  return (
    <Wrapper>
      {/*Navigation 위치예정*/}
      <LoginContainer>
        <StackOverFlowLogo width={40} height={40} />
        <GoogleLogin />
        <GithubLogin />
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

export default Login;

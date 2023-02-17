import styled from 'styled-components';
import GoogleLogin from 'components/GoogleLogin';

const Login = () => {
  return (
    <Wrapper>
      {/*Navigation 위치예정*/}
      <LoginContainer>
        <GoogleLogin />
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

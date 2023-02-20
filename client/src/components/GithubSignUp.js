import styled from 'styled-components';
import { ReactComponent as GithubIcon } from 'assets/githubLogo.svg';

// const HandleClickGithubButton = () => {};

const GithubSignUp = () => {
  return (
    <GithubLoginBtn>
      <GithubIcon width={20} height={20} />
      <span>Sign Up with GitHub</span>
    </GithubLoginBtn>
  );
};

const GithubLoginBtn = styled.button`
  width: 20rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  background-color: #2f3337;
  color: white;
  display: inline-block;
  padding: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border: 1px solid #d5d9dc;
  margin-bottom: 0.5rem;
  cursor: pointer;
  > span {
    padding: 0.3rem;
  }
  &:hover {
    background-color: #000000;
    border: 1px solid #000000;
  }
`;

export default GithubSignUp;
